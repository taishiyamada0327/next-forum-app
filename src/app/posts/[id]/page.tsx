import Link from 'next/link';
import Image from 'next/image';
import { getPostById, getCommentsByPostId } from '@/lib/api';
import { notFound } from 'next/navigation';
import CommentList from '@/components/forum/CommentList';
import CommentForm from '@/components/forum/CommentForm';

type Params = {
  params: { id: string };
};

type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function PostPage({ params, searchParams }: Props) {
  const postId = parseInt((await params).params.id, 10);
  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  const comments = await getCommentsByPostId(postId);

  return (
    <div>
      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div className="flex items-center">
            <Link
              href={`/categories/${post.category.id}`}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              {post.category.name}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <h1 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h1>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Image
              className="h-8 w-8 rounded-full mr-2"
              src={post.user.profileImage}
              alt={post.user.name}
              width={32}
              height={32}
            />
            <span className="font-medium text-gray-900">{post.user.name}</span>
            <span className="mx-1">•</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            {comments.length} コメント
          </h2>
          <div className="flex text-sm">
            <button className="text-blue-600 font-medium hover:text-blue-500 focus:outline-none">
              最新順
            </button>
            <span className="mx-2 text-gray-500">|</span>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              人気順
            </button>
          </div>
        </div>

        {/* コメントフォーム */}
        <CommentForm postId={post.id} />

        {/* コメントリスト */}
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
