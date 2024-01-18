import { useDispatch } from 'react-redux'
import FormLogin from '../components/Forms/FormLogin'
import { loginThunk } from '../store/auth/thunks'

const LoginPage = () => {
	const dispatch = useDispatch()

	const login = (body) => {
		dispatch(loginThunk(body))
	}
	return <FormLogin login={login} />
}

export default LoginPage
