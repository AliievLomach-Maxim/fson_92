import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import TodoPage from './pages/TodoPage'
import Layout from './layout/Layout'
import Layout2 from './layout/Layout2'
import TodoDetailsPage from './pages/TodoDetailsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />}>
						<Route path=':productId' element={<ProductDetailsPage />} />
					</Route>
					<Route path='products/:productId' element={<ProductDetailsPage />} />
					<Route path='todo' element={<TodoPage />} />
					<Route path='todo/:todoId' element={<TodoDetailsPage />} />
				</Route>
				<Route path='/pages' element={<Layout2 />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />} />
					<Route path='todo' element={<TodoPage />} />
				</Route>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	)
}

export default App
