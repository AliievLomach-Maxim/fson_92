import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../api/products'

const ProductDetailsPage = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState(null)

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

	return (
		product && (
			<div>
				<h1>{product.title}</h1>
			</div>
		)
	)
}

export default ProductDetailsPage
