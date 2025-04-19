'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ThumbsUp, Reply, Share, AlertTriangle } from 'lucide-react';
import { Comment } from '@/lib/types';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  const [likedComments, setLikedComments] = useState<Record<number, boolean>>(
    {}
  );

  const handleLike = (commentId: number) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <ul className="divide-y divide-gray-200">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <li key={comment.id} className="px-4 py-5 sm:px-6 hover:bg-gray-50">
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={comment.user.profileImage}
                  alt={comment.user.name}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    {comment.user.name}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    {comment.createdAt}
                  </span>
                </div>
                <div
                  className="text-sm text-gray-800"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
                <div className="mt-2 flex items-center space-x-4 text-xs">
                  <button
                    className={`flex items-center ${
                      likedComments[comment.id]
                        ? 'text-blue-600'
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>
                      いいね！{' '}
                      {comment.likes + (likedComments[comment.id] ? 1 : 0)}
                    </span>
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    <Reply className="h-4 w-4 mr-1 inline" />
                    <span>返信</span>
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    <Share className="h-4 w-4 mr-1 inline" />
                    <span>共有</span>
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <AlertTriangle className="h-4 w-4 mr-1 inline" />
                    <span>報告</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="px-4 py-6 text-center text-gray-500">
          まだコメントがありません。最初のコメントを投稿しましょう！
        </li>
      )}

      {comments.length > 0 && (
        <li className="px-4 py-4 sm:px-6 border-t border-gray-200 bg-gray-50 text-center">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            もっと見る
          </button>
        </li>
      )}
    </ul>
  );
}
