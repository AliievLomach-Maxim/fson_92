import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, signUpApi } from '../../api/auth'

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
