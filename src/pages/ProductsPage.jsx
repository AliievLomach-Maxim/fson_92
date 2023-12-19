import { Outlet } from 'react-router-dom'
import ProductsList from '../components/ProductsList/index'

const ProductsPage = () => {
	return (
		<>
			<Outlet />
			<ProductsList />
		</>
	)
}

export default ProductsPage
