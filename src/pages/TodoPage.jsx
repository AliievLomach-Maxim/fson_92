import { useDispatch, useSelector } from 'react-redux'
import { addCounterAction } from '../store/counter/actions'

const TodoPage = () => {
	const state = useSelector((state) => state)
	console.log('state :>> ', state)

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(addCounterAction(100))
	}

	return (
		<>
			<button onClick={handleClick}>{0}</button>
		</>
	)
}

export default TodoPage
