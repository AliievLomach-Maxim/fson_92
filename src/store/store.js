import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterToolkit/counterReducer'
import { todoReducer } from './todoWithSlice/sliceTodo'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from './products/slice'
import { postsReducer } from './posts/slice'

const persistConfig = {
	key: 'todo',
	storage,
	whitelist: ['todo'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

const reducer = {
	counter: counterReducer,
	todo: persistedReducer,
	products: productsReducer,
	posts: postsReducer,
}

// const customMiddl = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			if (typeof action === 'function') {
// 				action(store.dispatch)

// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
