import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProductsApi } from '../../api/products'

// export const productsAction = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(productsSlice.actions.fetching())
// 			const data = await getProductsApi()
// 			dispatch(productsSlice.actions.fulfilled(data))
// 		} catch (error) {
// 			dispatch(productsSlice.actions.rejected(error))
// 		}
// 	}
// }

// Такий підхід, можна використовувати, тільки, якщо НЕ потрібна відповідь про ПОМИЛКУ від серверу!!!!!
// export const getProductsThunk = createAsyncThunk('products/getProducts', () => getProductsApi())

// коли нас цікавить відповідь про ПОМИЛКУ від серверу:
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
// export const createProductsThunk = createAsyncThunk(
// 	'products/getProducts',
// 	async (value, { rejectWithValue }) => {
// 		try {
// 			return await getProductsApi(value)
// 		} catch (error) {
// 			return rejectWithValue(error.response.data)
// 		}
// 	}
// )

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: null,
		isLoading: false,
		error: '',
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.pending, (state) => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.products = payload
			})
			// Такий підхід, можна використовувати, тільки, якщо НЕ потрібна відповідь про ПОМИЛКУ від серверу!!!!!
			// .addCase(getProductsThunk.rejected, (state, { error }) => {
			// 	state.isLoading = false
			// 	state.error = error.message
			// })

			// коли нас цікавить відповідь про ПОМИЛКУ від серверу:

			.addCase(getProductsThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload.message
			})
	},
	// reducers: {
	// 	fetching: (state) => {
	// 		state.isLoading = true
	// 		state.error = ''
	// 	},
	// 	fulfilled: (state, { payload }) => {
	// 		state.isLoading = false
	// 		state.products = payload
	// 	},
	// 	rejected: (state, { payload }) => {
	// 		state.isLoading = false
	// 		state.error = payload
	// 	},
	// },
})

export const productsReducer = productsSlice.reducer
