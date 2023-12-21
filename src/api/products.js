import { api } from './api'

export const getSingleProduct = async (id) => {
	const { data } = await api(`products/${id}`)
	return data
}

// export const getAllProducts = async (skip, limit) => {
// 	const { data } = await api(`products?limit=${limit}&skip=${skip}`)
// 	return data
// }

// export const getSearchProducts = async (query) => {
// 	const { data } = await api(`products/search?q=${query}`)
// 	return data
// }

export const getProductsApi = async (skip, limit, query) => {
	const url = query
		? `products/search?limit=${limit}&skip=${skip}&q=${query}`
		: `products?limit=${limit}&skip=${skip}`
	const { data } = await api(url)
	return data
}
