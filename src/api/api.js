import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const authApi = axios.create({
	baseURL: 'https://practices-api.vercel.app/',
})
