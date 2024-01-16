import { authApi } from './api'

export const signUpApi = async (body) => {
	const { data } = await authApi.post('auth/signup', body)
	return data
}

export const loginApi = async (body) => {
	const { data } = await authApi.post('auth/login', body)
	return data
}

export const refreshApi = async () => {
	const { data } = await authApi('auth/refresh')
	return data
}
