// lib/dummy-data.ts
import { Category, Post, User } from './types';

// ユーザーダミーデータ
export const dummyUsers: User[] = [
  {
    id: '1',
    name: 'tanaka_taro',
    displayName: '田中太郎',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'suzuki_hanako',
    displayName: '鈴木花子',
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    name: 'yamada_takashi',
    displayName: '山田隆',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    createdAt: '2024-01-03T00:00:00Z',
  },
];

// カテゴリーダミーデータ
export const dummyCategories: Category[] = [
  {
    id: 1,
    name: 'ディスカッション',
    description:
      'さまざまなトピックについて話し合うためのカテゴリーです。技術的な話題から日常生活まで、幅広い議論が展開されています。',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'コミュニティ',
    description:
      'コミュニティに関する話題についてのカテゴリーです。メンバー同士の交流やイベント情報の共有などが行われています。',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 3,
    name: 'お知らせ',
    description:
      '重要なお知らせや更新情報を共有するカテゴリーです。システムアップデートやメンテナンス情報などがここに掲載されます。',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 4,
    name: 'テクノロジー',
    description:
      '最新のテクノロジーやプログラミング、ガジェットについて議論するカテゴリーです。',
    createdAt: '2024-01-05T00:00:00Z',
  },
  {
    id: 5,
    name: 'ライフスタイル',
    description:
      '健康、フィットネス、料理、旅行など、日常生活に関するトピックを扱うカテゴリーです。',
    createdAt: '2024-01-10T00:00:00Z',
  },
  {
    id: 6,
    name: 'エンターテインメント',
    description:
      '映画、音楽、ゲーム、アートなど、エンターテインメントに関する話題を議論するカテゴリーです。',
    createdAt: '2024-01-15T00:00:00Z',
  },
];

// 投稿ダミーデータ
export const dummyPosts: Post[] = [
  {
    id: 1,
    title: '新しいプロジェクトの始め方について',
    content:
      '<p>皆さん、こんにちは！</p><p>新しいプロジェクトを始める際、どのような準備をしていますか？私は最近、チームで新しいプロジェクトを立ち上げることになり、効率的な進め方を模索しています。</p><p>特に以下の点について皆さんの意見を聞きたいです：</p><ul><li>プロジェクト計画の立て方</li><li>チームメンバーの役割分担</li><li>進捗管理の方法</li><li>リスク管理のアプローチ</li></ul><p>経験やアドバイスがあれば、ぜひ共有してください！</p>',
    userId: '1',
    user: dummyUsers[0],
    categoryId: 1,
    category: {
      id: 1,
      name: 'ディスカッション',
      description:
        'さまざまなトピックについて話し合うためのカテゴリーです。技術的な話題から日常生活まで、幅広い議論が展開されています。',
      createdAt: '2024-01-01T00:00:00Z',
    },
    viewsCount: 156,
    commentsCount: 23,
    createdAt: '2025-04-19T12:00:00Z',
    updatedAt: '2025-04-19T12:00:00Z',
  },
  {
    id: 2,
    title: '最新のフレームワークアップデートについて',
    content:
      '<p>最近リリースされたフレームワークのアップデートについて、皆さんどう思いますか？新機能が追加されましたが、互換性の問題も報告されているようです。</p><p>アップデートするか待つべきか、意見を聞かせてください。</p>',
    userId: '2',
    user: dummyUsers[1],
    categoryId: 3,
    category: {
      id: 3,
      name: 'お知らせ',
      description:
        '重要なお知らせや更新情報を共有するカテゴリーです。システムアップデートやメンテナンス情報などがここに掲載されます。',
      createdAt: '2024-01-01T00:00:00Z',
    },
    viewsCount: 89,
    commentsCount: 15,
    createdAt: '2025-04-19T09:00:00Z',
    updatedAt: '2025-04-19T09:00:00Z',
  },
  {
    id: 3,
    title: 'リモートワークのメリットとデメリット',
    content:
      '<p>リモートワークが一般化してきましたが、皆さんはどのようなメリットとデメリットを感じていますか？</p><p>私の経験では、通勤時間の削減や柔軟な働き方ができる点がメリットですが、コミュニケーションの難しさや孤独感などのデメリットも感じています。</p>',
    userId: '3',
    user: dummyUsers[2],
    categoryId: 1,
    category: {
      id: 1,
      name: 'ディスカッション',
      description:
        'さまざまなトピックについて話し合うためのカテゴリーです。技術的な話題から日常生活まで、幅広い議論が展開されています。',
      createdAt: '2024-01-01T00:00:00Z',
    },
    viewsCount: 243,
    commentsCount: 45,
    createdAt: '2025-04-18T15:00:00Z',
    updatedAt: '2025-04-18T15:00:00Z',
  },
  {
    id: 4,
    title: 'コミュニティイベント開催のお知らせ',
    content:
      '<p>皆さん、こんにちは！</p><p>来月、オンラインでコミュニティイベントを開催します。テーマは「技術交流会」です。</p><p>詳細は以下の通りです：</p><ul><li>日時：5月15日（土）19:00〜21:00</li><li>場所：Zoom（リンクは後日共有）</li><li>参加費：無料</li></ul><p>ぜひ、ご参加ください！</p>',
    userId: '1',
    user: dummyUsers[0],
    categoryId: 2,
    category: {
      id: 2,
      name: 'コミュニティ',
      description:
        'コミュニティに関する話題についてのカテゴリーです。メンバー同士の交流やイベント情報の共有などが行われています。',
      createdAt: '2024-01-01T00:00:00Z',
    },
    viewsCount: 312,
    commentsCount: 28,
    createdAt: '2025-04-17T10:00:00Z',
    updatedAt: '2025-04-17T10:00:00Z',
  },
];

// カテゴリーごとの投稿を取得する関数
export const getPostsByCategory = (categoryId: number): Post[] => {
  return dummyPosts.filter((post) => post.categoryId === categoryId);
};

// IDでカテゴリーを取得する関数
export const getCategoryById = (id: number): Category | undefined => {
  return dummyCategories.find((category) => category.id === id);
};
