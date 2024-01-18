import { useDispatch } from 'react-redux'
import FormRegistration from '../components/Forms/FormRegistration'
import { signUpThunk } from '../store/auth/thunks'

const RegistrationPage = () => {
	const dispatch = useDispatch()

	const register = (body) => {
		dispatch(signUpThunk(body))
	}

	return <FormRegistration register={register} />
}

export default RegistrationPage
