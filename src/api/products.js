import { api } from './api'

export const getAllProducts = async (skip, limit) => {
	const { data } = await api(`products?limit=${limit}&skip=${skip}`)
	return data
}

export const getSingleProduct = async (id) => {
	const { data } = await api(`products/${id}`)
	return data
}
