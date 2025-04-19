import { Category, Post, Comment } from './types';

// 仮データ（実際には、APIまたはデータベースから取得）
const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'ディスカッション',
    description: 'さまざまなトピックについて話し合うためのカテゴリーです。',
    iconName: 'MessageSquare',
    iconColor: 'text-blue-600',
    topicsCount: 142,
  },
  {
    id: 2,
    name: 'コミュニティ',
    description: 'コミュニティに関する話題についてのカテゴリーです。',
    iconName: 'Users',
    iconColor: 'text-green-600',
    topicsCount: 89,
  },
  {
    id: 3,
    name: 'お知らせ',
    description: '重要なお知らせや更新情報を共有するカテゴリーです。',
    iconName: 'TrendingUp',
    iconColor: 'text-orange-600',
    topicsCount: 35,
  },
];

const POSTS: Post[] = [
  {
    id: 1,
    title: '新しいプロジェクトの始め方について',
    content:
      '<p>皆さん、こんにちは！</p><p>新しいプロジェクトを始める際、どのような準備をしていますか？私は最近、チームで新しいプロジェクトを立ち上げることになり、効率的な進め方を模索しています。</p><p>特に以下の点について皆さんの意見を聞きたいです：</p><ul><li>プロジェクト計画の立て方</li><li>チームメンバーの役割分担</li><li>進捗管理の方法</li><li>リスク管理のアプローチ</li></ul><p>経験やアドバイスがあれば、ぜひ共有してください！</p>',
    createdAt: '1時間前',
    user: {
      id: 1,
      name: '田中太郎',
      profileImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    category: {
      id: 1,
      name: 'ディスカッション',
    },
    commentsCount: 23,
    viewsCount: 156,
  },
  {
    id: 2,
    title: '最新のフレームワークアップデートについて',
    content:
      '<p>最近リリースされたフレームワークのアップデートについて、皆さんどう思いますか？新機能が追加されましたが、互換性の問題も報告されているようです。</p><p>アップデートするか待つべきか、意見を聞かせてください。</p>',
    createdAt: '3時間前',
    user: {
      id: 2,
      name: '鈴木花子',
      profileImage:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    category: {
      id: 3,
      name: 'お知らせ',
    },
    commentsCount: 15,
    viewsCount: 89,
  },
];

const COMMENTS: Record<number, Comment[]> = {
  1: [
    {
      id: 1,
      content:
        '<p>私の経験では、プロジェクトの最初に十分な時間をかけて計画を立てることが重要です。特にステークホルダーの期待値をしっかり把握することが大切だと思います。</p>',
      user: {
        id: 3,
        name: '山田隆',
        profileImage:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      createdAt: '45分前',
      likes: 5,
    },
    {
      id: 2,
      content:
        '<p>チーム内のコミュニケーションツールをしっかり決めておくことも大切ですね。私たちのチームではSlackとTrelloを組み合わせて使っています。</p>',
      user: {
        id: 2,
        name: '鈴木花子',
        profileImage:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      createdAt: '30分前',
      likes: 2,
    },
  ],
  2: [
    {
      id: 3,
      content:
        '<p>私は既にアップデートを適用しましたが、いくつかの問題が発生しました。本番環境への適用は少し待ったほうが良いかもしれません。</p>',
      user: {
        id: 4,
        name: '高橋健太',
        profileImage:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      createdAt: '1時間前',
      likes: 7,
    },
  ],
};

// APIファンクション
export async function getAllCategories(): Promise<Category[]> {
  // 実際のAPIリクエストをここに実装
  // 今回はモックデータを返す
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CATEGORIES);
    }, 100);
  });
}

export async function getCategoryById(id: number): Promise<Category | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = CATEGORIES.find((cat) => cat.id === id);
      resolve(category || null);
    }, 100);
  });
}

export async function getLatestPosts(limit: number = 10): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS.slice(0, limit));
    }, 100);
  });
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPosts = POSTS.filter(
        (post) => post.category.id === categoryId
      );
      resolve(filteredPosts);
    }, 100);
  });
}

export async function getPostById(id: number): Promise<Post | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = POSTS.find((p) => p.id === id);
      resolve(post || null);
    }, 100);
  });
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COMMENTS[postId] || []);
    }, 100);
  });
}
