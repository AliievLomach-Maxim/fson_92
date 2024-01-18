import { useSelector } from 'react-redux'
import { globalLoadingSelector } from '../../store/root/selectors'

const Loader = () => {
	const isLoading = useSelector(globalLoadingSelector)

	return isLoading ? <div>Loading...!!!!!!</div> : <></>
}

export default Loader
