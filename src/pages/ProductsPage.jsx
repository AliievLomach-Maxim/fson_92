import FormSearchProducts from '../components/Forms/FormSearchProducts'
import ProductsList from '../components/ProductsList/index'
import { useState, useCallback, useEffect } from 'react'
import { getProductsApi } from '../api/products'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/products/slice'

const LIMIT = 10

const ProductsPage = () => {
	const { isLoading, products, error } = useSelector((state) => state.products)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])

	// const createProducts = (value) => {
	// 	dispatch(createProductsThunk(value))
	// }

	const handleLoadMore = () => {
		// setPage((prev) => prev + 1)
	}

	return (
		<>
			{isLoading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			<FormSearchProducts />
			{products && (
				<ProductsList handleLoadMore={handleLoadMore} products={products} />
				// <ProductsList handleLoadMore={handleLoadMore} products={products} isShowBtn={isShowBtn} />
			)}
		</>
	)
}

export default ProductsPage

// const ProductsPage = () => {
// 	const { isLoading, products, error } = useSelector((state) => state.products)
// 	const dispatch = useDispatch()
// 	// const [products, setProducts] = useState(null)
// 	// const [isLoading, setIsLoading] = useState(false)
// 	// const [error, setError] = useState('')
// 	// const [page, setPage] = useState(1)
// 	// const [isShowBtn, setIsShowBtn] = useState(false)

// 	// const [searchParams] = useSearchParams()

// 	// const getProducts = useCallback(
// 	// 	async (query) => {
// 	// 		try {
// 	// 			setIsLoading(true)
// 	// 			setIsShowBtn(false)
// 	// 			setError('')
// 	// 			const response = await getProductsApi(page * LIMIT - LIMIT, LIMIT, query)

// 	// 			setProducts((prev) =>
// 	// 				prev && !query ? [...prev, ...response.products] : response.products
// 	// 			)

// 	// 			if (response.products.length < response.total) setIsShowBtn(true)
// 	// 		} catch (error) {
// 	// 			setError(error.message)
// 	// 		} finally {
// 	// 			setIsLoading(false)
// 	// 		}
// 	// 	},
// 	// 	[page]
// 	// )

// 	// useEffect(() => {
// 	// 	const query = searchParams.get('search')

// 	// 	// getProducts(query)
// 	// 	// query && setPage(1)
// 	// }, [getProducts, searchParams])
// 	useEffect(() => {
// 		dispatch(productsAction())
// 	}, [dispatch])

// 	const handleLoadMore = () => {
// 		// setPage((prev) => prev + 1)
// 	}

// 	return (
// 		<>
// 			{isLoading && <h1>loading...</h1>}
// 			{error && <h1>{error}</h1>}
// 			<FormSearchProducts />
// 			{products && (
// 				<ProductsList handleLoadMore={handleLoadMore} products={products} isShowBtn={isShowBtn} />
// 			)}
// 		</>
// 	)
// }

// export default ProductsPage
