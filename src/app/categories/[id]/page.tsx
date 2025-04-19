import Link from 'next/link';
import { Plus } from 'lucide-react';
import PostList from '@/components/forum/PostList';
import CategorySidebar from '@/components/forum/CategorySidebar';
import { getCategoryById, getPostsByCategory } from '@/lib/api';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = parseInt(params.id, 10);
  const category = await getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(categoryId);

  return (
    <div>
      <div className="bg-white shadow rounded-lg mb-6 overflow-hidden">
        <div className="p-6">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${category.iconColor}`}>
              {/* 一般的なアイコンをレンダリング - 実装はクライアントコンポーネントで行う必要があります */}
              <div className="h-8 w-8"></div>
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
          <div className="mt-4 flex justify-end">
            <Link
              href={`/posts/create?categoryId=${category.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              新規投稿
            </Link>
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
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option>新着順</option>
                    <option>人気順</option>
                    <option>返信数順</option>
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
