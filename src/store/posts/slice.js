import { createSlice } from '@reduxjs/toolkit'
import { getAllPostsThunk } from './thunks'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload.message
}
const handleFulfilled = (state) => {
	state.isLoading = false
}

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: null,
		isLoading: false,
		error: '',
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPostsThunk.fulfilled, (state, { payload }) => {
				state.posts = payload.posts
			})
			.addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
			.addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
	},
})

// export const {} = postsSlice.actions
export const postsReducer = postsSlice.reducer
