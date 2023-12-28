import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterToolkit/counterReducer'
import { todoReducer } from './todoWithSlice/sliceTodo'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'todo',
	storage,
	whitelist: ['todo'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

const reducer = {
	counter: counterReducer,
	todo: persistedReducer,
}

export const store = configureStore({ reducer })

export const persistor = persistStore(store)

// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { counterReducer } from './counterToolkit/counterReducer'
// import { todoReducer } from './todoWithSlice/sliceTodo'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const reducer = combineReducers({
// 	counter: counterReducer,
// 	todo: todoReducer,
// })

// const persistConfig = {
// 	key: 'todo',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({ reducer: persistedReducer })

// export const persistor = persistStore(store)

// import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from './counterToolkit/counterReducer'
// import { todoReducer } from './todoWithSlice/sliceTodo'

// const reducer = {
// 	counter: counterReducer,
// 	todo: todoReducer,
// }

// export const store = configureStore({ reducer })

// import { combineReducers, createStore } from 'redux'
// // import { counterReducer } from './counter/counterReducer'
// import { todoReducer } from './todo/ruducerTodo'
// import { counterReducer } from './counterToolkit/counterReducer'
// import { configureStore } from '@reduxjs/toolkit'

// const reducer = {
// 	// counter: counterReducer,
// 	counter: counterReducer,
// 	todo: todoReducer,
// }

// export const store = configureStore({ reducer })
// // export const store = createStore(rootReducer)
