import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, refreshApi, signUpApi } from '../../api/auth'

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, { rejectWithValue }) => {
	try {
		return await signUpApi(body)
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
	try {
		return await loginApi(body)
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue, getState }) => {
		try {
			return await refreshApi(getState().auth.token)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)
