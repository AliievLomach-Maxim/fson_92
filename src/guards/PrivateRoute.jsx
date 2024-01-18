import { useSelector } from 'react-redux'
import { isAuthSelector } from '../store/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = useSelector(isAuthSelector)
const location = useLocation()

	return isAuth ? children : <Navigate to='/login' state={location}/>
}

export default PrivateRoute
