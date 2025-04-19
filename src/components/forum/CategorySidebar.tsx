'use client';

import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategorySidebarProps {
  category: Category;
  postsCount: number;
}

export default function CategorySidebar({
  category,
  postsCount,
}: CategorySidebarProps) {
  return (
    <>
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            カテゴリー情報
          </h3>
          <div className="mt-4 text-sm text-gray-500">
            <p>{category.description}</p>
            <p className="mt-3">
              このカテゴリーでは、{postsCount}件の投稿があります。
            </p>
          </div>
          <div className="mt-5">
            <Link
              href={`/posts/create?categoryId=${category.id}`}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              このカテゴリーに投稿する
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            ルール
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 text-gray-400">
                <span className="font-medium">1.</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">
                  相手を尊重し、礼儀正しく接しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 text-gray-400">
                <span className="font-medium">2.</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">
                  質問する前に、既存の投稿を確認しましょう。
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 text-gray-400">
                <span className="font-medium">3.</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">
                  スパムやオフトピックの投稿は避けましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
