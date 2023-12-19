const Product = ({ product }) => {
	return (
		<div className='container'>
			<div className='card p-2'>
				<p>{product.title}</p>
				<p>{product.price} $</p>
			</div>
		</div>
	)
}

export default Product
