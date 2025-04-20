import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { Category } from '@/lib/types';

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div
                className={`rounded-full p-3 bg-opacity-10 group-hover:bg-opacity-20 transition-colors duration-200`}
              ></div>
              <h2 className="ml-4 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {category.name}
              </h2>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {category.description}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span> トピック</span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </Link>
      ))}
    </div>
  );
}
