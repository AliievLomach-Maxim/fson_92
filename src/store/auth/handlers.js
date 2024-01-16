export const handleSignUp = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}
