import ForumHeader from '@/components/forum/ForumHeader';
import CategoryList from '@/components/forum/CategoryList';
import PostList from '@/components/forum/PostList';
import TrendingTopics from '@/components/forum/TrendingTopics';
import { getAllCategories, getLatestPosts } from '@/lib/api';

export default async function Home() {
  // このデータはサーバーサイドで取得され、直接ページにレンダリングされます
  const categories = await getAllCategories();
  const posts = await getLatestPosts();

  return (
    <div>
      <ForumHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CategoryList categories={categories} className="mb-6" />
          <PostList posts={posts} />
        </div>

        <div className="lg:col-span-1">
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
}
