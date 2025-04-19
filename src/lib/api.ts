import { supabase } from './supabase';
import { Category, Post, Comment } from './types';

// カテゴリー取得関数
export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('id');

  if (error) {
    console.error('カテゴリー取得エラー:', error);
    return [];
  }

  return data || [];
}

export async function getCategoryById(id: number): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`カテゴリーID ${id} 取得エラー:`, error);
    return null;
  }

  return data;
}

// 投稿取得関数
export async function getLatestPosts(limit: number = 10): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      user:user_id (*),
      category:category_id (id, name)
    `
    )
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('最新投稿取得エラー:', error);
    return [];
  }

  // コメント数を取得
  const postsWithCounts = await Promise.all(
    (data || []).map(async (post) => {
      const { count, error: countError } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', post.id);

      if (countError) {
        console.error(`投稿ID ${post.id} のコメント数取得エラー:`, countError);
        return {
          ...post,
          commentsCount: 0,
        };
      }

      return {
        ...post,
        commentsCount: count || 0,
      };
    })
  );

  return postsWithCounts;
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      user:user_id (*),
      category:category_id (id, name)
    `
    )
    .eq('category_id', categoryId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`カテゴリーID ${categoryId} の投稿取得エラー:`, error);
    return [];
  }

  // コメント数を取得
  const postsWithCounts = await Promise.all(
    (data || []).map(async (post) => {
      const { count, error: countError } = await supabase
        .from('comments')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', post.id);

      if (countError) {
        console.error(`投稿ID ${post.id} のコメント数取得エラー:`, countError);
        return {
          ...post,
          commentsCount: 0,
        };
      }

      return {
        ...post,
        commentsCount: count || 0,
      };
    })
  );

  return postsWithCounts;
}

export async function getPostById(id: number): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      *,
      user:user_id (*),
      category:category_id (id, name)
    `
    )
    .eq('id', id)
    .single();

  if (error) {
    console.error(`投稿ID ${id} 取得エラー:`, error);
    return null;
  }

  // ビュー数を更新
  await supabase
    .from('posts')
    .update({ views_count: (data.views_count || 0) + 1 })
    .eq('id', id);

  // コメント数を取得
  const { count, error: countError } = await supabase
    .from('comments')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', id);

  if (countError) {
    console.error(`投稿ID ${id} のコメント数取得エラー:`, countError);
    return null;
  }

  return {
    ...data,
    commentsCount: count || 0,
  };
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('comments')
    .select(
      `
      *,
      user:user_id (*)
    `
    )
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error(`投稿ID ${postId} のコメント取得エラー:`, error);
    return [];
  }

  return data || [];
}

// 投稿作成関数
export async function createPost(post: {
  title: string;
  content: string;
  user_id: string;
  category_id: number;
}): Promise<number | null> {
  const { data, error } = await supabase.from('posts').insert([post]).select();

  if (error) {
    console.error('投稿作成エラー:', error);
    return null;
  }

  return data?.[0]?.id || null;
}

// コメント作成関数
export async function createComment(comment: {
  content: string;
  user_id: string;
  post_id: number;
}): Promise<number | null> {
  const { data, error } = await supabase
    .from('comments')
    .insert([comment])
    .select();

  if (error) {
    console.error('コメント作成エラー:', error);
    return null;
  }

  return data?.[0]?.id || null;
}
