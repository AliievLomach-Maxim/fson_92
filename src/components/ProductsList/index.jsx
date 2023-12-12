import { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/products'
import Product from '../Product/index'

const LIMIT = 10
const ProductsList = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)

	useEffect(() => {
		const getProducts = async () => {
			try {
				// this.setState({ isLoading: true, error: '' })
				setIsLoading(true)
				setError('')
				const response = await getAllProducts(page * LIMIT, LIMIT)
				// this.setState((prev) => ({
				// 	products: prev.products ? [...prev.products, ...response.products] : response.products,
				// }))
				setProducts((prev) => (prev ? [...prev, ...response.products] : response.products))
			} catch (error) {
				setError(error.message)
				// this.setState({ error: error.message })
			} finally {
				// this.setState({ isLoading: false })
				setIsLoading(false)
			}
		}
		getProducts()
	}, [page])

	const handleLoadMore = () => {
		// this.setState((prev) => ({ page: prev.page + 1 }))
		setPage((prev) => prev + 1)
	}

	return (
		<>
			{isLoading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			{products && products.map((el) => <Product key={el.id} product={el} />)}

			<button className='btn btn-secondary mt-5 mx-5' onClick={handleLoadMore}>
				load more
			</button>
		</>
	)
}

export default ProductsList
