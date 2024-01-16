import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import ProductsPage from './pages/ProductsPage'
// import TodoPage from './pages/TodoPage'
import Layout from './layout/Layout'
// import Layout2 from './layout/Layout2'
// import TodoDetailsPage from './pages/TodoDetailsPage'
// import ProductDetailsPage from './pages/ProductDetailsPage'

import './store/store'
import PostsPage from './pages/PostsPage'

const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))
const Layout2 = lazy(() => import('./layout/Layout2'))
const TodoDetailsPage = lazy(() => import('./pages/TodoDetailsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))

const App = () => {
	return (
		<>
			<Suspense fallback={<>loading...</>}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='products' element={<ProductsPage />} />
						<Route path='products/:productId' element={<ProductDetailsPage />} />
						<Route path='posts' element={<PostsPage />} />
						<Route path='todo' element={<TodoPage />} />
						<Route path='todo/:todoId' element={<TodoDetailsPage />} />
					</Route>
					<Route path='/pages' element={<Layout2 />}>
						<Route index element={<HomePage />} />
						<Route path='products' element={<ProductsPage />} />
						<Route path='todo' element={<TodoPage />} />
					</Route>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registration' element={<RegistrationPage />} />

					<Route path='*' element={<h1>404</h1>} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
