import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, refreshThunk, signUpThunk } from './thunks'
import { handleSignUp } from './handlers'

const initialState = {
	token: '',
	profile: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.token = ''
			state.profile = null
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUpThunk.fulfilled, handleSignUp)
			.addCase(loginThunk.fulfilled, handleSignUp)
			.addCase(refreshThunk.fulfilled, handleSignUp)
			.addCase(refreshThunk.rejected, (state) => {
				state.token = ''
				state.profile = null
				// localStorage.clear()
			})
	},
})

export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions
