import Link from 'next/link';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Category } from '@/lib/types';

interface CategoryListProps {
  categories: Category[];
  className?: string;
}

export default function CategoryList({
  categories,
  className = '',
}: CategoryListProps) {
  // アイコンのマッピング
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="h-6 w-6" />;
      case 'Users':
        return <Users className="h-6 w-6" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <MessageSquare className="h-6 w-6" />;
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition duration-150"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className={`flex-shrink-0}`}>
                {/* {getIcon(category.iconName)} */}
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">トピック</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
