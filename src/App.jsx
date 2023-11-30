// import FormCreateTodo from './components/Forms/FormCreateUser'
import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import FormCreateTodo from './components/Forms/FormCreateTodo'
import TodoList from './components/TodoList'
import data from './data.json'
import { nanoid } from 'nanoid'

class App extends Component {
	state = {
		isShowModal: false,
		todo: data,
	}

	toggleModal = () => {
		this.setState((prev) => ({
			isShowModal: !prev.isShowModal,
		}))
	}

	createTodo = (data) => {
		const newTodo = {
			...data,
			id: nanoid(),
			completed: false,
		}
		const isDuplicated = this.state.todo.find((el) => el.title === data.title)
		if (isDuplicated) return
		this.setState((prev) => ({
			todo: [...prev.todo, newTodo],
		}))
	}

	deleteTodo = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.filter((el) => el.id !== id),
		}))
	}

	updateTodo = (id) => {
		this.setState((prev) => ({
			todo: prev.todo.map((el) => {
				if (el.id === id) return { ...el, completed: !el.completed }
				else return el
			}),
		}))
	}

	render() {
		return (
			<>
				<Header showModal={this.toggleModal} />

				{this.state.isShowModal && (
					<Modal hideModal={this.toggleModal}>zxmczmxc</Modal>
				)}

				<FormCreateTodo createTodo={this.createTodo} />
				<TodoList
					todo={this.state.todo}
					deleteTodo={this.deleteTodo}
					updateTodo={this.updateTodo}
				/>
			</>
		)
	}
}

export default App
// class App extends Component {
// 	state = {
// 		isShowModal: false,
// 		todo: data,
// 	}

// 	toggleModal = () => {
// 		this.setState((prev) => ({
// 			isShowModal: !prev.isShowModal,
// 		}))
// 	}

// 	// sendUserData = (data) => {
// 	// 	const newUser = {
// 	// 		...data,
// 	// 		id: 'qrwety',
// 	// 		location: 'UA',
// 	// 	}
// 	// 	console.log('data :>> ', newUser)
// 	// }
// 	createTodo = (data) => {}
// 	render() {
// 		return (
// 			<>
// 				<Header showModal={this.toggleModal} />
// 				{/* <Counter name='Alex' /> */}
// 				{this.state.isShowModal && (
// 					<Modal hideModal={this.toggleModal}>zxmczmxc</Modal>
// 				)}
// 				{/* <FormCreateTodo sendUserData={this.sendUserData} /> */}
// 				<FormCreateTodo createTodo={this.createTodo} />
// 				<TodoList todo={this.state.todo} />
// 			</>
// 		)
// 	}
// }

// export default App
