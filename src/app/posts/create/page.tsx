import { getAllCategories } from '@/lib/api';
import PostForm from '@/components/forum/PostForm';

type Params = {
  categoryId?: string;
};

type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function CreatePostPage({ params, searchParams }: Props) {
  const resolvedParams = await params;

  const categories = await getAllCategories();
  const selectedCategoryId = resolvedParams.categoryId
    ? parseInt(resolvedParams.categoryId, 10)
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
