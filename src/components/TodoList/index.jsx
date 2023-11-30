import Todo from '../Todo'

const TodoList = ({ todo, deleteTodo, updateTodo }) => {
	return (
		<>
			{todo.map((el) => (
				<Todo
					todo={el}
					key={el.id}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}
				/>
			))}
		</>
	)
}

export default TodoList
