import { authApi } from './api'

export const signUpApi = async (body) => {
	const { data } = await authApi.post('auth/signup', body)
	return data
}

export const loginApi = async (body) => {
	const { data } = await authApi.post('auth/login', body)
	return data
}

export const refreshApi = async (token) => {
	const { data } = await authApi('auth/refresh', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return data
}
