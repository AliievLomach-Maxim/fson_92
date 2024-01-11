import { createSlice } from '@reduxjs/toolkit'
import { createProductsThunk, getProductsThunk } from './thunks'

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

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: null,
		isLoading: false,
		error: '',
		singleProduct: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
				state.products = payload.products
			})
			.addCase(createProductsThunk.fulfilled, (state, { payload }) => {
				state.singleProduct = payload
			})
			.addMatcher((action) => action.type.endsWith('/pending'), handlePending)
			.addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
			.addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
	},
})

export const productsReducer = productsSlice.reducer

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

// Такий підхід, можна використовувати, тільки, якщо НЕ потрібна відповідь про ПОМИЛКУ від серверу!!!!!
// .addCase(getProductsThunk.rejected, (state, { error }) => {
// 	state.isLoading = false
// 	state.error = error.message
// })

// коли нас цікавить відповідь про ПОМИЛКУ від серверу:

// export const getProductsThunk = createAsyncThunk(
// 	'products/getProducts',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			return await getProductsApi()
// 		} catch (error) {
// 			return rejectWithValue(error.response.data)
// 		}
// 	}
// )

// .addCase(getProductsThunk.rejected, (state, { payload }) => {
// 	state.isLoading = false
// 	state.error = payload.message
// })

// // .addCase(getProductsThunk.pending, handlePending)
// .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
// 	state.isLoading = false
// 	state.products = payload
// })
// .addCase(getProductsThunk.rejected, handleRejected)
// // .addCase(createProductsThunk.pending, handlePending)
// .addCase(createProductsThunk.fulfilled, (state, { payload }) => {
// 	state.isLoading = false
// 	state.singleProduct = payload
// })
