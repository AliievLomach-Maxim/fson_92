import { createAction, nanoid } from '@reduxjs/toolkit'

export const addTodoAction = createAction('todo/add', (data) => {
	const newTodo = {
		...data,
		completed: false,
		id: nanoid(),
	}
	return { payload: newTodo }
})
export const removeTodoAction = createAction('todo/remove')
export const updateTodoAction = createAction('todo/update')
