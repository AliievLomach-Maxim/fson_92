import { useCallback, useEffect, useState } from 'react'
import { getAllProducts } from '../../api/products'
import Product from '../Product/index'

const LIMIT = 10

const ProductsList = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)

	const getProducts = useCallback(async () => {
		try {
			setIsLoading(true)
			setError('')
			const response = await getAllProducts(page * LIMIT, LIMIT)
			setProducts((prev) => (prev ? [...prev, ...response.products] : response.products))
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [page])

	useEffect(() => {
		getProducts()
	}, [getProducts])

	const handleLoadMore = () => {
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
