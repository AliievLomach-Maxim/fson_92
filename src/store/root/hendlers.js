export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
export const handleRejected = (state, { payload, error }) => {
	state.isLoading = false
	state.error = payload?.message || payload || error?.message || 'some error'
}
export const handleFulfilled = (state) => {
	state.isLoading = false
}
