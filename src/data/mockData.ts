import type { Post, Site, Tag } from '../types';

export const mockTags: Tag[] = [
  { id: '1', name: 'Web開発', color: '#3B82F6' },
  { id: '2', name: 'UI/UX', color: '#10B981' },
  { id: '3', name: 'JavaScript', color: '#F59E0B' },
  { id: '4', name: 'React', color: '#8B5CF6' },
  { id: '5', name: 'Vue.js', color: '#06B6D4' },
  { id: '6', name: 'Node.js', color: '#84CC16' },
  { id: '7', name: 'デザイン', color: '#EF4444' },
  { id: '8', name: 'フロントエンド', color: '#F97316' },
];

export const mockSites: Site[] = [
  {
    id: '1',
    name: 'Tech Blog Community',
    description: '技術ブログを中心としたコミュニティサイト。最新の開発トレンドや実用的なTipsを共有しています。',
    url: 'https://techblog.example.com',
    thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Design Hub',
    description: 'デザイナーとクリエイターのためのプラットフォーム。UIデザイン、グラフィックデザインに関する情報交換の場。',
    url: 'https://designhub.example.com',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Frontend Developers',
    description: 'フロントエンド開発者のコミュニティ。React、Vue、Angularなどのモダンフレームワークについて議論。',
    url: 'https://frontend-dev.example.com',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop'
  },
  {
    id: '4',
    name: 'Creative Coders',
    description: 'クリエイティブコーディングとアート表現に特化したコミュニティ。p5.js、Three.jsなどを使った作品を共有。',
    url: 'https://creative-code.example.com',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop'
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'モダンWebアプリケーションのパフォーマンス最適化手法',
    content: 'Webアプリケーションのパフォーマンス最適化について詳しく解説します。バンドルサイズの削減、遅延読み込み、キャッシュ戦略など、実践的な手法を紹介...',
    summary: 'Webアプリケーションのパフォーマンス最適化の実践的手法について解説',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop',
    author: '田中 太郎',
    publishedAt: '2024-01-15',
    siteId: '1',
    tags: [mockTags[0], mockTags[2], mockTags[7]]
  },
  {
    id: '2',
    title: 'UIデザインシステム構築のベストプラクティス',
    content: 'スケーラブルなUIデザインシステムの構築方法について説明します。コンポーネント設計、色彩設計、タイポグラフィの統一など...',
    summary: 'スケーラブルなUIデザインシステムの構築方法とベストプラクティス',
    thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=300&fit=crop',
    author: '佐藤 花子',
    publishedAt: '2024-01-12',
    siteId: '2',
    tags: [mockTags[1], mockTags[6]]
  },
  {
    id: '3',
    title: 'React 18の新機能とSuspenseの活用法',
    content: 'React 18で導入された新機能、特にSuspenseとConcurrent Featuresについて詳しく解説します...',
    summary: 'React 18の新機能とSuspenseを使った非同期処理の最適化について',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
    author: '山田 次郎',
    publishedAt: '2024-01-10',
    siteId: '3',
    tags: [mockTags[3], mockTags[2], mockTags[0]]
  },
  {
    id: '4',
    title: 'Vue 3 Composition APIで構築するモダンなSPA',
    content: 'Vue 3のComposition APIを使ったSingle Page Applicationの構築方法を実例とともに紹介します...',
    summary: 'Vue 3 Composition APIを活用したモダンなSPA開発の実践ガイド',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop',
    author: '鈴木 三郎',
    publishedAt: '2024-01-08',
    siteId: '3',
    tags: [mockTags[4], mockTags[2], mockTags[7]]
  },
  {
    id: '5',
    title: 'Three.jsで作るインタラクティブなWebGL体験',
    content: 'Three.jsを使ったWebGLアプリケーションの作成方法と、ユーザーとのインタラクションの実装について解説...',
    summary: 'Three.jsを使ったインタラクティブなWebGL体験の開発手法',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=300&fit=crop',
    author: '高橋 美咲',
    publishedAt: '2024-01-05',
    siteId: '4',
    tags: [mockTags[2], mockTags[6]]
  },
  {
    id: '6',
    title: 'Node.js APIサーバーのスケーラブル設計',
    content: 'Node.jsを使ったAPIサーバーの設計と、大規模アプリケーションでのスケーラビリティ確保の方法について...',
    summary: 'Node.jsによるスケーラブルなAPIサーバー設計の実践的アプローチ',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop',
    author: '伊藤 健一',
    publishedAt: '2024-01-03',
    siteId: '1',
    tags: [mockTags[5], mockTags[0]]
  }
];

// ユーティリティ関数
export const getPostById = (id: string): Post | undefined => {
  return mockPosts.find(post => post.id === id);
};

export const getSiteById = (id: string): Site | undefined => {
  return mockSites.find(site => site.id === id);
};

export const getPostsByTag = (tagId: string): Post[] => {
  return mockPosts.filter(post => 
    post.tags.some(tag => tag.id === tagId)
  );
};

export const getPostsBySite = (siteId: string): Post[] => {
  return mockPosts.filter(post => post.siteId === siteId);
};

export const getFeaturedPosts = (limit: number = 6): Post[] => {
  return mockPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};