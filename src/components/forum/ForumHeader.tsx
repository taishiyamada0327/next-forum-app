import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function ForumHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          コミュニティフォーラム
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          様々なトピックについて議論し、アイデアを共有しましょう
        </p>
      </div>
      <Link
        href="/posts/create"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Plus className="h-5 w-5 mr-2" />
        新規投稿
      </Link>
    </div>
  );
}
