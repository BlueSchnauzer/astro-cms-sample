export interface Post {
  id: string;
  title: string;
  content: string;
  summary: string;
  thumbnail?: string;
  author: string;
  publishedAt: string;
  siteId: string;
  tags: Tag[];
}

export interface Site {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail?: string;
}

export interface Tag {
  id: string;
  name: string;
  color?: string;
}