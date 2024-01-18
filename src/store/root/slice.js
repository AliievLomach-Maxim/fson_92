import { createSlice } from '@reduxjs/toolkit'
import { handleFulfilled, handlePending, handleRejected } from './hendlers'

const rootSlice = createSlice({
	name: 'root',
	initialState: {
		isLoading: false,
		error: '',
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
			.addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
	},
})

export const rootReducer = rootSlice.reducer
