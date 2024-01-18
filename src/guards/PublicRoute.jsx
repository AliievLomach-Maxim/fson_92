import { useSelector } from 'react-redux'
import { isAuthSelector } from '../store/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const isAuth = useSelector(isAuthSelector)
	const { state: prevLocation } = useLocation()
	return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />
}

export default PublicRoute
