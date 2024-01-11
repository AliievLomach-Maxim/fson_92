import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPostsApi } from '../../api/posts'

export const getAllPostsThunk = createAsyncThunk(
	'posts/getAllPosts',
	async (_, { rejectWithValue }) => {
		try {
			return await getPostsApi()
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
