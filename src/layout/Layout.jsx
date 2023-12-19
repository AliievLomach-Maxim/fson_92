import { Outlet } from 'react-router-dom'
import Header from '../components/Header/index'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
