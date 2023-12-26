import { DECREMENT, INCREMENT } from './types'

const initialState = {
	counter: 0,
}

export const counterReducer = (state = initialState, action) => {
	if (action.type === INCREMENT) {
		return {
			...state,
			counter: state.counter + action.payload,
		}
	} else if (action.type === DECREMENT) {
		return {
			...state,
			counter: state.counter - action.payload,
		}
	}
	return state
}
