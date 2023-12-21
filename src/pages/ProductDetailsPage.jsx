import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../api/products'

const ProductDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)

	const location = useLocation()

	const navigate = useNavigate()

	useEffect(() => {
		const getProduct = async () => {
			try {
				const data = await getSingleProduct(productId)
				setProduct(data)
			} catch (error) {
				console.error(error)
			}
		}

		productId && getProduct()
	}, [productId])

	const handelBack = () => {
		navigate(location.state ?? '/products', { state: 'qwe' })
	}

	return (
		product && (
			<div>
				{/* isAuth?<></>:<Navigate to='/login' /> */}
				<button onClick={handelBack}>go back</button>
				{/* <Link to={location.state ?? '/products'} >go back</Link> */}
				<h1>{product.title}</h1>
			</div>
		)
	)
}

export default ProductDetailsPage
