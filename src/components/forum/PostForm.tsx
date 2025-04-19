'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Category } from '@/lib/types';
// Note: 本番環境では実際のリッチテキストエディターを使用することを推奨します
// 例: React Quill, TinyMCE, Draft.js, CKEditor など

interface PostFormProps {
  categories: Category[];
  initialCategoryId?: number;
}

export default function PostForm({
  categories,
  initialCategoryId,
}: PostFormProps) {
  const router = useRouter();
  const [categoryId, setCategoryId] = useState<number>(
    initialCategoryId || categories[0]?.id || 1
  );
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 実際のAPIコールをここに実装
      // const response = await fetch('/api/posts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ categoryId, title, content })
      // })

      // if (!response.ok) throw new Error('投稿の作成に失敗しました')
      // const data = await response.json()

      // 成功したら、投稿詳細ページにリダイレクト
      // router.push(`/posts/${data.id}`)

      // モックデータを使用したデモ用リダイレクト
      console.log('投稿を作成:', { categoryId, title, content });
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error('投稿エラー:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="category_id"
              className="block text-sm font-medium text-gray-700"
            >
              カテゴリー
            </label>
            <div className="mt-1">
              <select
                id="category_id"
                name="category_id"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={categoryId}
                onChange={(e) => setCategoryId(parseInt(e.target.value, 10))}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              タイトル
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="投稿のタイトルを入力してください"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              内容
            </label>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                rows={8}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="投稿の内容を入力してください"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              マークダウン形式がサポートされています。
            </p>
          </div>

          <div className="pt-3 border-t border-gray-200 flex justify-end">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSubmitting || !title.trim() || !content.trim()}
            >
              {isSubmitting ? '投稿中...' : '投稿する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
