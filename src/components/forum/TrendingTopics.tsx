import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export default function TrendingTopics() {
  // 仮のトレンドトピックデータ
  const trendingTopics = [
    {
      id: 1,
      title: '最新フレームワークの使い方',
      commentsCount: 24,
      viewsCount: 1200,
    },
    {
      id: 2,
      title: 'データベース設計のベストプラクティス',
      commentsCount: 47,
      viewsCount: 2500,
    },
    {
      id: 3,
      title: 'CI/CDパイプラインの構築方法',
      commentsCount: 18,
      viewsCount: 980,
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          人気のトピック
        </h3>
        <div className="mt-4 space-y-4">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="flex items-start">
              <div className="flex-shrink-0 text-blue-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <Link
                  href={`/posts/${topic.id}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600"
                >
                  {topic.title}
                </Link>
                <p className="mt-1 text-xs text-gray-500">
                  {topic.commentsCount}件のコメント・
                  {topic.viewsCount.toLocaleString()}閲覧
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
