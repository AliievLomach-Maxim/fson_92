
const ProductsList = () => {
	const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)


	// const ref = useRef(100)
	// console.log('ref.current :>> ', ref.current)
	// ref.current = 200

	const refButton = useRef()

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

	// const result = useMemo(()=>{},[])

	// const sortedProducts = products && [...products].sort((a, b) => a.price - b.price)
	// const sortedProducts = products?.toSorted((a, b) => {
	// 	console.log('sorting')
	// 	for (let i = 0; i < 10000000; i++) {}
	// 	return a.price - b.price
	// })

	const sortedProducts = useMemo(() => {
		return products?.toSorted((a, b) => {
			console.log('sorting')
			for (let i = 0; i < 10000000; i++) {}
			return a.price - b.price
		})
	}, [products])
	// const result = useCallback(()=>{},[])



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
