import { api } from './api'

export const getPostsApi = async (skip = 0, limit = 10, query) => {
	const url = query
		? `posts/search?limit=${limit}&skip=${skip}&q=${query}`
		: `posts?limit=${limit}&skip=${skip}`
	const { data } = await api(url)
	return data
}
