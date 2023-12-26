import { DECREMENT, INCREMENT } from './types'

export const addCounterAction = (number) => {
	return { type: INCREMENT, payload: number }
}

export const decrementCounterAction = (number) => {
	return { type: DECREMENT, payload: number }
}
