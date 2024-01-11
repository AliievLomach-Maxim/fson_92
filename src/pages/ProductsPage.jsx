import FormSearchProducts from '../components/Forms/FormSearchProducts'
import ProductsList from '../components/ProductsList/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import FormCreateProduct from '../components/Forms/FormCreateProduct'
import { createProductsThunk, getProductsThunk } from '../store/products/thunks'
import {
	selectorError,
	selectorIsLoading,
	selectorProducts,
	selectorSingleProduct,
} from '../store/products/selectors'

const ProductsPage = () => {
	const isLoading = useSelector(selectorIsLoading)
	const products = useSelector(selectorProducts)
	const error = useSelector(selectorError)
	const singleProduct = useSelector(selectorSingleProduct)

	const dispatch = useDispatch()

	const [counter, setCounter] = useState(0)

	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])

	console.log('singleProduct :>> ', singleProduct)

	const handleLoadMore = () => {
		// setPage((prev) => prev + 1)
	}

	const createProduct = (body) => {
		dispatch(createProductsThunk(body))
	}

	return (
		<>
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
			{isLoading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			<FormCreateProduct createProduct={createProduct} />
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
