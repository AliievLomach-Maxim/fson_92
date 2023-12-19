<<<<<<< Updated upstream
import { Component } from 'react'
import Product from '../Product'
=======
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
>>>>>>> Stashed changes
import { getAllProducts } from '../../api/products'

const LIMIT = 10
<<<<<<< Updated upstream

class ProductsList extends Component {
	state = {
		products: null,
		isLoading: false,
		error: '',
		page: 1,
	}

	componentDidMount() {
		this.getProducts()
	}
=======
const ProductsList = () => {
	const [counter, setCounter] = useState(0)
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
			<button ref={refButton} onClick={() => setCounter((prev) => prev + 1)}>
				{counter}
			</button>
			{/* <button onClick={() => ref.current++}>click</button> */}
			<button onClick={() => (refButton.current.textContent = 'qrwety')}>click</button>
			{isLoading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
			{sortedProducts && sortedProducts.map((el) => <Product key={el.id} product={el} />)}
>>>>>>> Stashed changes

	componentDidUpdate(_, prevState) {
		if (prevState.page !== this.state.page) {
			this.getProducts()
		}
	}

	getProducts = async () => {
		try {
			this.setState({ isLoading: true, error: '' })
			const response = await getAllProducts(this.state.page * LIMIT, LIMIT)
			this.setState((prev) => ({
				products: prev.products ? [...prev.products, ...response.products] : response.products,
				total: response.total,
			}))
		} catch (error) {
			this.setState({ error: error.message })
		} finally {
			this.setState({ isLoading: false })
		}
	}

	handleLoadMore = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}
	render() {
		const { products, isLoading, error, total } = this.state

		return (
			<>
				{isLoading && <h1>loading...</h1>}
				{error && <h1>{error}</h1>}
				{products && products.map((el) => <Product key={el.id} product={el} />)}

				<button className='btn btn-secondary mt-5 mx-5' onClick={this.handleLoadMore}>
					load more
				</button>
			</>
		)
	}
}

export default ProductsList
// import { Component } from 'react'
// import Product from '../Product'
// import { getAllProducts } from '../../api/products'

// const LIMIT = 10

// class ProductsList extends Component {
// 	state = {
// 		products: null,
// 		isLoading: false,
// 		error: '',
// 		page: 1,
// 		// isShowProducts: false,
// 	}

// 	componentDidMount() {
// 		this.getProducts()
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		// if (this.state.isShowProducts !== prevState.isShowProducts && this.state.isShowProducts) {
// 		// 	this.getProducts()
// 		// }
// 		// if (this.state.isShowProducts !== prevState.isShowProducts && !this.state.isShowProducts) {
// 		// 	this.setState({ products: null })
// 		// }
// 		if (prevState.page !== this.state.page) {
// 			this.getProducts()
// 		}
// 	}

// 	getProducts = async () => {
// 		try {
// 			this.setState({ isLoading: true, error: '' })
// 			const response = await getAllProducts(this.state.page * LIMIT, LIMIT)
// 			this.setState((prev) => ({
// 				products: prev.products ? [...prev.products, ...response.products] : response.products,
// 				total: response.total,
// 			}))
// 			// this.setState({ products: response.products, total: response.total })
// 			// this.setState({ products: response.products, total: Number.parseInt(response.total / 30) }) // for pagination
// 		} catch (error) {
// 			console.log(error)
// 			// this.setState({ error: error.response.data })
// 			this.setState({ error: error.message })
// 		} finally {
// 			this.setState({ isLoading: false })
// 		}
// 	}

// 	handleClick = () => {
// 		this.setState((prev) => ({ isShowProducts: !prev.isShowProducts }))
// 	}

// 	handlePaginate = ({ target: { textContent } }) => {
// 		this.setState({ page: textContent })
// 	}

// 	handleLoadMore = () => {
// 		this.setState((prev) => ({ page: prev.page + 1 }))
// 	}
// 	render() {
// 		const { products, isLoading, error, isShowProducts, total } = this.state

// 		return (
// 			<>
// 				<button className='btn btn-success px-2' onClick={this.handleClick}>
// 					{isShowProducts ? 'Hide Products' : 'Show Products'}
// 				</button>
// 				{isLoading && <h1>loading...</h1>}
// 				{error && <h1>{error}</h1>}
// 				{products && products.map((el) => <Product key={el.id} product={el} />)}

// 				<button className='btn btn-secondary mt-5 mx-5' onClick={this.handleLoadMore}>
// 					load more
// 				</button>
// 				{/* pagination */}
// 				{/* <ul>
// 					{Array(total)
// 						.fill(null)
// 						.map((_, ind) => (
// 							<li key={ind} onClick={this.handlePaginate}>
// 								{ind + 1}
// 							</li>
// 						))}
// 				</ul> */}
// 			</>
// 		)
// 	}
// }

// export default ProductsList
