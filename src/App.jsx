import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/index'
import Modal from './components/Modal/Modal'
import FormCreateTodo from './components/Forms/FormCreateTodo'
import TodoList from './components/TodoList/index'

// function name(params) {
// 	return [value, fn]
// }

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	// const [todo, setTodo] = useState(null)
	const [todo, setTodo] = useState([])
	const [isDeleted, setIsDeleted] = useState(false)
	const [isCreated, setIsCreated] = useState(false)

	const [state, setState] = useState({
		isShowModal: false,
		todo: null,
		isDeleted: false,
		isCreated: false,
	})
	// every render & mount
	useEffect(() => {
		console.log('render')
	})

	// cdm
	useEffect(() => {
		console.log('mount')
	}, [])

	// cdm + cdu + if()
	useEffect(() => {
		console.log('mount + updated todo')
	}, [todo])

	// cdu + if()
	useEffect(() => {
		todo.length > 0 && console.log('updated todo')
	}, [todo])

	// setState((prev) => ({
	// 	...prev,
	// 	isShowModal: true,
	// }))

	const toggleModal = () => {
		setIsShowModal((prev) => !prev)
	}

	const createTodo = (data) => {
		const newTodo = {
			...data,
			id: nanoid(),
			completed: false,
		}

		const isDuplicated = todo.find((el) => el.title === data.title)
		if (isDuplicated) return
		setTodo((prevState) => [...prevState, newTodo])
		setIsCreated(true)
		setTimeout(() => {
			setIsCreated(false)
		}, 1500)
	}

	const deleteTodo = (id) => {
		setTodo((prevTodo) => {
			return prevTodo.filter((el) => el.id !== id)
		})
	}

	const updateTodo = (id) => {
		setTodo((prev) => prev.map((el) => (el.id === id ? { ...el, completed: !el.completed } : el)))
	}

	return (
		<>
			{isDeleted && (
				<div className='alert alert-primary' role='alert'>
					Deleted
				</div>
			)}
			{isCreated && (
				<div className='alert alert-primary' role='alert'>
					Created
				</div>
			)}
			<Header showModal={toggleModal} />
			<ProductsList />
			{isShowModal && <Modal hideModal={toggleModal}>zxmczmxc</Modal>}

			<FormCreateTodo createTodo={createTodo} />
			{todo && <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />}
		</>
	)
}

export default App

// function fn() {}
// const name = (params) => {
// 	const number = 10
// 	return number
// }

// const user = {
// 	name: 'alex',
// 	age: 30,
// }

// const { age, name,value } = user

// const user = ['Alex', 30]
// const user2 = [30, 'Alex']

// const [name, age] = user
