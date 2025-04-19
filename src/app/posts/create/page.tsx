import { getAllCategories } from '@/lib/api';
import PostForm from '@/components/forum/PostForm';

interface CreatePostPageProps {
  searchParams: {
    categoryId?: string;
  };
}

export default async function CreatePostPage({
  searchParams,
}: CreatePostPageProps) {
  const categories = await getAllCategories();
  const selectedCategoryId = searchParams.categoryId
    ? parseInt(searchParams.categoryId, 10)
    : undefined;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">新規投稿作成</h1>
        <p className="mt-1 text-sm text-gray-500">
          あなたの考えをコミュニティと共有しましょう
        </p>
      </div>

      <PostForm
        categories={categories}
        initialCategoryId={selectedCategoryId}
      />
    </div>
  );
}
