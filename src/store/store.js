import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterToolkit/counterReducer'
import { todoReducer } from './todoWithSlice/sliceTodo'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productsReducer } from './products/slice'
import { postsReducer } from './posts/slice'
import { authReducer } from './auth/slice'
import { rootReducer } from './root/slice'

const persistConfig = {
	key: 'todo',
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = {
	counter: counterReducer,
	todo: todoReducer,
	products: productsReducer,
	posts: postsReducer,
	auth: persistedReducer,
	root: rootReducer,
}

export const store = configureStore({ reducer })

export const persistor = persistStore(store)
