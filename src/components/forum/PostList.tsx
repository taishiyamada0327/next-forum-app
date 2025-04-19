import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Eye } from 'lucide-react';
import { Post } from '@/lib/types';

interface PostListProps {
  posts: Post[];
  showCategory?: boolean;
}

export default function PostList({
  posts,
  showCategory = true,
}: PostListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6 bg-gray-50">
        <h2 className="text-lg font-medium text-gray-900">最新の投稿</h2>
      </div>

      <ul className="divide-y divide-gray-200">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li
              key={post.id}
              className="hover:bg-gray-50 transition duration-150"
            >
              <div className="px-4 py-5 sm:px-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={post.user.profileImage}
                      alt={post.user.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/posts/${post.id}`}
                      className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <div className="mt-1 flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {post.user.name}
                      </span>
                      <span className="mx-1 text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">
                        {post.createdAt}
                      </span>
                      {showCategory && (
                        <>
                          <span className="mx-1 text-sm text-gray-500">•</span>
                          <Link
                            href={`/categories/${post.category.id}`}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                          >
                            {post.category.name}
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{post.commentsCount}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{post.viewsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="px-4 py-6 text-center text-gray-500">
            投稿がありません
          </li>
        )}
      </ul>
    </div>
  );
}
