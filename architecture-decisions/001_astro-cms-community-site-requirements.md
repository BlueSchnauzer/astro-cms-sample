# 001_Astro CMS コミュニティサイト要件定義

## プロジェクト概要

複数のユーザー投稿サイトの投稿とサイト紹介を横断的に表示するWebサイトをAstroで構築する。
参考デザイン: https://community.camp-fire.jp/

## 技術スタック

- **フレームワーク**: Astro (SSG使用)
- **言語**: TypeScript
- **CSSフレームワーク**: Tailwind CSS
- **パッケージマネージャー**: npm
- **CMS**: Kuroco (ヘッドレスCMS)
- **デプロイ先**: KurocoFront (静的ホスティングサービス)
- **CI/CD**: GitHub Actions

## 機能要件

### トップページ
- 複数サイトの注目投稿を表示
- 投稿に紐づいたタグ一覧を表示
- 各コミュニティサイトの概要を表示
- カード型レイアウトで統一

### 詳細ページ
- **投稿詳細ページ**: 投稿クリック時に表示
- **タグ一覧ページ**: タグ押下時に該当投稿一覧を表示
- **サイト紹介ページ**: サイト概要クリック時に表示

### レスポンシブ対応
- モバイル・タブレット・デスクトップに対応

## データ構造（想定）

### 投稿データ
```typescript
interface Post {
  id: string
  title: string
  content: string
  thumbnail?: string
  author: string
  publishedAt: string
  siteId: string
  tags: Tag[]
}
```

### サイトデータ
```typescript
interface Site {
  id: string
  name: string
  description: string
  url: string
  thumbnail?: string
}
```

### タグデータ
```typescript
interface Tag {
  id: string
  name: string
  color?: string
}
```

## デザイン要件

- **参考サイト**: https://community.camp-fire.jp/
- **カラーパレット**: 白ベース、青系アクセント
- **レイアウト**: カード型グリッドレイアウト
- **フォント**: 日本語対応サンセリフ系

## 開発フロー

1. **初期設定**: Astroプロジェクト作成とTypeScript・TailwindCSS環境構築
2. **モックデータ作成**: Kurocoからのデータ取得前の固定値作成
3. **基本レイアウト**: ヘッダー・フッター・ナビゲーション
4. **コンポーネント作成**: 投稿カード・サイトカード・タグコンポーネント
5. **ページ実装**: 各ページの機能実装
6. **CMS連携**: Kuroco APIとの接続（将来対応）
7. **デプロイ設定**: GitHub Actions設定

## 更新フロー

- CMSデータ更新（1日1回）
- CMS更新完了後にGitHub Actions実行
- GitHub Actions内でKuroco APIからデータ取得
- 取得したデータで静的サイト生成
- KurocoFrontに自動デプロイ

## 次のステップ

1. Astroプロジェクトの初期化
2. 必要な依存関係のインストール
3. モックデータの作成
4. 基本レイアウトの実装