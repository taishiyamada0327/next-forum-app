import { dummyCategories } from '@/lib/dummy-data';
import CategoryGrid from '@/components/forum/CategoryGrid';

export default function CategoriesPage() {
  const categories = dummyCategories;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">カテゴリー</h1>
        <p className="mt-2 text-lg text-gray-600">
          興味のあるトピックを見つけて、ディスカッションに参加しましょう
        </p>
      </div>

      <CategoryGrid categories={categories} />
    </div>
  );
}
