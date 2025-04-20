import Link from 'next/link';
import { Plus, MessageSquare } from 'lucide-react';
import PostList from '@/components/forum/PostList';
import CategorySidebar from '@/components/forum/CategorySidebar';
import { getCategoryById, getPostsByCategory } from '@/lib/dummy-data';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = parseInt((await params).id, 10);
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(categoryId);

  return (
    <div>
      {/* ナビゲーションパンくずリスト */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              ホーム
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              href="/categories"
              className="text-gray-500 hover:text-gray-700"
            >
              カテゴリー
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">{category.name}</li>
        </ol>
      </nav>

      {/* カテゴリーヘッダー */}
      <div className="bg-white shadow rounded-lg mb-6 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`flex-shrink-0`}>
                <MessageSquare className="h-10 w-10" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </div>
            <Link
              href={`/posts/create?categoryId=${category.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              新規投稿
            </Link>
          </div>

          {/* カテゴリー統計 */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {posts.length}
              </div>
              <div className="text-sm text-gray-500">投稿数</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {posts.reduce((acc, post) => acc + post.commentsCount, 0)}
              </div>
              <div className="text-sm text-gray-500">コメント数</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {posts.reduce((acc, post) => acc + post.viewsCount, 0)}
              </div>
              <div className="text-sm text-gray-500">閲覧数</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {Math.floor(
                  posts.reduce((acc, post) => acc + post.commentsCount, 0) /
                    (posts.length || 1)
                )}
              </div>
              <div className="text-sm text-gray-500">平均コメント数</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="border-b border-gray-200 px-4 py-4 sm:px-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  トピック一覧
                </h2>
                <div className="flex space-x-2">
                  <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>新着順</option>
                    <option>人気順</option>
                    <option>返信数順</option>
                    <option>閲覧数順</option>
                  </select>
                </div>
              </div>
            </div>
            <PostList posts={posts} showCategory={false} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <CategorySidebar category={category} postsCount={posts.length} />
        </div>
      </div>
    </div>
  );
}
