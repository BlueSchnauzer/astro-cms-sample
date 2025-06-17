import type { ApiPostResponse, ApiSiteResponse } from "../types";

const API_BASE_URL = "https://community-hub-proto.g.kuroco.app/rcms-api/3";
const ACCESS_TOKEN =
	"f9ca28dd630cabaa9a8d3c9de22040e12d8cce125d65bd7c30ecb4f685ba9c0b";

export class ApiClient {
	private static instance: ApiClient;
	private baseUrl: string;
	private accessToken: string;

	private constructor() {
		this.baseUrl = API_BASE_URL;
		this.accessToken = ACCESS_TOKEN;
	}

	public static getInstance(): ApiClient {
		if (!ApiClient.instance) {
			ApiClient.instance = new ApiClient();
		}
		return ApiClient.instance;
	}

	private async request<T>(endpoint: string): Promise<T> {
		const url = `${this.baseUrl}${endpoint}`;

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					"X-RCMS-API-ACCESS-TOKEN": this.accessToken,
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error(
					`API request failed: ${response.status} ${response.statusText}`
				);
			}

			return await response.json();
		} catch (error) {
			console.error(`API request error for ${endpoint}:`, error);
			throw error;
		}
	}

	public async getPosts(): Promise<ApiPostResponse> {
		return this.request<ApiPostResponse>("/post");
	}

	public async getCommunities(): Promise<ApiSiteResponse> {
		return this.request<ApiSiteResponse>("/community");
	}
}

export const apiClient = ApiClient.getInstance();
