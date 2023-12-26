import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/counterReducer'
import { todoReducer } from './todo/ruducerTodo'

const rootReducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
})

export const store = createStore(rootReducer)

// import { createStore } from 'redux'

// const reducer = (state, action) => {
// 	if (action.type === 'addCounter') {
// 		return {
// 			...state,
// 			counter: action.payload,
// 		}
// 	} else if (action.type === 'createUsers') {
// 		return {
// 			...state,
// 			users: action.payload,
// 		}
// 	}
// 	return state
// }

// export const store = createStore(reducer, { counter: 0, todo: [] })

// // store.dispatch({ type: 'addCounter', payload: 100 })

// // store.dispatch({ type: 'createUsers', payload: [1, 2, 3] })

// // console.log('store :>> ', store.getState())

// // const [first, setfirst] = useState(second)
