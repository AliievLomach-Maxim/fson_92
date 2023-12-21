import { Link, useLocation } from 'react-router-dom'

const Product = ({ product }) => {
	const location = useLocation()
	return (
		<Link to={`${product.id}`} state={location}>
			<div className='container'>
				<div className='card p-2'>
					<p>{product.title}</p>
					<p>{product.price} $</p>
				</div>
			</div>
		</Link>
	)
}

export default Product
