import Product from '../Product/index'

const ProductsList = ({ products, handleLoadMore, isShowBtn }) => {
	return (
		<>
			{products.map((el) => (
				<Product key={el.id} product={el} />
			))}

			{isShowBtn && (
				<button className='btn btn-secondary mt-5 mx-5' onClick={handleLoadMore}>
					load more
				</button>
			)}
		</>
	)
}

export default ProductsList
