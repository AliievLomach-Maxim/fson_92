import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout2 = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout2
