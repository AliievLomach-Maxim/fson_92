import { createSelector } from '@reduxjs/toolkit'

export const selectorProducts = (state) => {
	const newProducts = state.products.products?.toSorted((a, b) => a.price - b.price)
	return newProducts
}
export const selectorIsLoading = (state) => state.products.isLoading
export const selectorError = (state) => state.products.error
export const selectorSingleProduct = (state) => state.products.singleProduct

export const selectorFilter = (state) => state.products.filter

export const selector = createSelector(selectorFilter, selectorProducts, (filter, products) => {
	return products.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
})
