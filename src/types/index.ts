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

// API レスポンス用の型定義
export interface ApiPostResponse {
	errors: any[];
	messages: any[];
	list: ApiPost[];
	pageInfo: {
		totalCnt: number;
		perPage: number;
		pageNo: number;
		totalPageCnt: number;
	};
}

export interface ApiPost {
	topics_id: number;
	subject: string;
	content: string;
	summary: string;
	thumbnail?: {
		id: string;
		url: string;
	}; // 実際のプロパティ名
	ymd: string;
	inst_ymdhi: string;
	update_ymdhi: string;
	author: string;
	siteId: string;
	[key: string]: any;
}

export interface ApiSiteResponse {
	errors: any[];
	messages: any[];
	list: ApiSite[];
	pageInfo: {
		totalCnt: number;
		perPage: number;
		pageNo: number;
		totalPageCnt: number;
	};
}

export interface ApiSite {
	topics_id: number;
	subject: string;
	description: string;
	url?: { url: string; title: string }; // 実際のプロパティ名
	thumbnail?: {
		id: string;
		url: string;
	}; // 実際のプロパティ名
	inst_ymdhi: string;
	update_ymdhi: string;
	[key: string]: any;
}
