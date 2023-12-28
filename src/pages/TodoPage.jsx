import { useDispatch, useSelector } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodoAction, removeTodoAction, updateTodoAction } from '../store/todoWithSlice/sliceTodo'
import FormCreateTodo from '../components/Forms/FormCreateTodo'

const TodoPage = () => {
	const { todo } = useSelector((state) => state.todo)
	const dispatch = useDispatch()

	const deleteTodo = (id) => {
		dispatch(removeTodoAction(id))
	}

	const updateTodo = (id) => {
		dispatch(updateTodoAction(id))
	}

	const createTodo = (data) => {
		dispatch(addTodoAction(data))
	}

	return (
		<>
			<FormCreateTodo createTodo={createTodo} />
			{todo && <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />}
		</>
	)
}

export default TodoPage
