import { useDispatch, useSelector } from 'react-redux'
import FormRegistration from '../components/Forms/FormRegistration'
import { signUpThunk } from '../store/auth/thunks'
import { isAuthSelector } from '../store/auth/selectors'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const RegistrationPage = () => {
	const isAuth = useSelector(isAuthSelector)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	const register = (body) => {
		dispatch(signUpThunk(body))
	}

	return <FormRegistration register={register} />
}

export default RegistrationPage
