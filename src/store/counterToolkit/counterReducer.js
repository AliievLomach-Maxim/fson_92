import { createReducer } from '@reduxjs/toolkit'
import { addCounterAction, decrementCounterAction } from './actions'

const initialState = {
	counter: 0,
}

// export const counterReducer = (state = initialState, action) => {
// 	if (action.type === INCREMENT) {
// 		return {
// 			...state,
// 			counter: state.counter + action.payload,
// 		}
// 	} else if (action.type === DECREMENT) {
// 		return {
// 			...state,
// 			counter: state.counter - action.payload,
// 		}
// 	}
// 	return state
// }

export const counterReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addCounterAction, (state, action) => {
			return {
				...state,
				counter: state.counter + action.payload,
			}
		})
		.addCase(decrementCounterAction, (state, action) => {
			return {
				...state,
				counter: state.counter - action.payload,
			}
		})
})
