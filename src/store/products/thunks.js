import { createAsyncThunk } from '@reduxjs/toolkit'
import { createProductsApi, getProductsApi } from '../../api/products'

export const getProductsThunk = createAsyncThunk(
	'products/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			return await getProductsApi()
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const createProductsThunk = createAsyncThunk(
	'products/createProducts',
	async (body, { rejectWithValue }) => {
		try {
			return await createProductsApi(body)
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
