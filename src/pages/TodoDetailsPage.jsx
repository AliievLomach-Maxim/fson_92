import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const TodoDetailsPage = () => {
	const { todoId } = useParams()

	useEffect(() => {}, [todoId])

	return <div>TodoDetailsPage</div>
}

export default TodoDetailsPage
