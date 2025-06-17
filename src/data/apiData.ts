import type { Post, Site, Tag, ApiPost, ApiSite } from "../types";
import { apiClient } from "../api/client";
import { mockTags } from "./mockData";

// APIデータをアプリケーション形式に変換するユーティリティ関数
export const convertApiPostToPost = (apiPost: ApiPost, sites: Site[]): Post => {
	const site = sites.find((s) => s.id === apiPost.topics_id.toString());

	return {
		id: apiPost.topics_id.toString(),
		title: apiPost.subject || "タイトルなし",
		content: apiPost.content || "",
		summary: apiPost.summary,
		thumbnail: apiPost.thumbnail?.url,
		author: apiPost.author || "API User", // APIにauthor情報がない場合のデフォルト
		publishedAt:
			apiPost.ymd ||
			(apiPost.inst_ymdhi
				? apiPost.inst_ymdhi.split(" ")[0]
				: new Date().toISOString().split("T")[0]),
		siteId: apiPost.siteId || "1",
		tags:
			mockTags && mockTags.length > 0
				? mockTags.slice(0, Math.floor(Math.random() * 3) + 1)
				: [], // 一時的にランダムなタグを割り当て
	};
};

export const convertApiSiteToSite = (apiSite: ApiSite): Site => {
	return {
		id: apiSite.topics_id.toString(),
		name: apiSite.subject || "サイト名なし",
		description: apiSite.description || "サイト説明なし",
		url: apiSite.url?.url || "#",
		thumbnail: apiSite.thumbnail?.url,
	};
};

// API呼び出し関数
export const fetchPosts = async (): Promise<Post[]> => {
	try {
		const [postsResponse, sitesResponse] = await Promise.all([
			apiClient.getPosts(),
			apiClient.getCommunities(),
		]);

		if (postsResponse.errors && postsResponse.errors.length > 0) {
			console.error("Posts API errors:", postsResponse.errors);
			throw new Error("Failed to fetch posts");
		}

		if (sitesResponse.errors && sitesResponse.errors.length > 0) {
			console.error("Sites API errors:", sitesResponse.errors);
			throw new Error("Failed to fetch sites");
		}


		const sites = sitesResponse.list.map(convertApiSiteToSite);
		const posts = postsResponse.list.map((apiPost) =>
			convertApiPostToPost(apiPost, sites)
		);

		return posts;
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		throw error;
	}
};

export const fetchSites = async (): Promise<Site[]> => {
	try {
		const response = await apiClient.getCommunities();

		if (response.errors && response.errors.length > 0) {
			console.error("Sites API errors:", response.errors);
			throw new Error("Failed to fetch sites");
		}


		return response.list.map(convertApiSiteToSite);
	} catch (error) {
		console.error("Failed to fetch sites:", error);
		throw error;
	}
};

// 既存のユーティリティ関数をAPI版として実装
export const getPostById = async (id: string): Promise<Post | undefined> => {
	const posts = await fetchPosts();
	return posts.find((post) => post.id === id);
};

export const getSiteById = async (id: string): Promise<Site | undefined> => {
	const sites = await fetchSites();
	return sites.find((site) => site.id === id);
};

export const getPostsByTag = async (tagId: string): Promise<Post[]> => {
	const posts = await fetchPosts();
	return posts.filter((post) => post.tags.some((tag) => tag.id === tagId));
};

export const getPostsBySite = async (siteId: string): Promise<Post[]> => {
	const posts = await fetchPosts();
	return posts.filter((post) => post.siteId === siteId);
};

export const getFeaturedPosts = async (limit: number = 6): Promise<Post[]> => {
	const posts = await fetchPosts();
	return posts
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() -
				new Date(a.publishedAt).getTime()
		)
		.slice(0, limit);
};
