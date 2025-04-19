'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CommentFormProps {
  postId: number;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim()) {
      // 実際のAPIコールをここに実装
      console.log('Comment submitted:', { postId, content });

      // フォームをリセット
      setContent('');

      // ページをリロードしてコメントを反映（本番環境では他の方法を検討）
      window.location.reload();
    }
  };

  return (
    <div className="px-4 py-4 sm:px-6 border-b border-gray-200">
      <div className="flex">
        <div className="mr-3 flex-shrink-0">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 min-w-0">
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                id="content"
                name="content"
                rows={3}
                placeholder="コメントを入力してください..."
                className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!content.trim()}
              >
                コメントする
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
