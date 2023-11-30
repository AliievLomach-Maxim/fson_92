const Todo = ({ todo, deleteTodo, updateTodo }) => {
	return (
		<>
			<li>
				{todo.title} {todo.description}
			</li>

			<button onClick={() => updateTodo(todo.id)}>
				{todo.completed.toString()}
			</button>
			<br />
			<button onClick={() => deleteTodo(todo.id)}>Delete</button>
		</>
	)
}

export default Todo
