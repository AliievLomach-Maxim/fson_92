import { createSlice } from '@reduxjs/toolkit'
import { signUpThunk } from './thunks'
import { handleSignUp } from './handlers'

const initialState = {
	isLoading: false,
	error: '',
	token: '',
	profile: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(signUpThunk.fulfilled, handleSignUp)
			.addCase(signUpThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(signUpThunk.pending, (state) => {
				state.isLoading = false
				state.error = ''
			})
	},
})

export const authReducer = authSlice.reducer
