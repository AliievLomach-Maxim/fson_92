<<<<<<< Updated upstream
// import FormCreateTodo from './components/Forms/FormCreateUser'
import Header from './components/Header/Header'
// import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'
import FormCreateTodo from './components/Forms/FormCreateTodo'
import TodoList from './components/TodoList'
import data from './data.json'
import { nanoid } from 'nanoid'
import ProductsList from './components/ProductsList'

class App extends Component {
	state = {
		isShowModal: false,
		todo: null,
		isDeleted: false,
		isCreated: false,
	}

	componentDidMount() {
		const localData = localStorage.getItem('todo')
		if (localData && JSON.parse(localData).length > 0) {
			this.setState({
				todo: JSON.parse(localData),
			})
		} else
			this.setState({
				todo: data,
			})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todo?.length !== this.state.todo.length)
			localStorage.setItem('todo', JSON.stringify(this.state.todo))

		if (prevState.todo?.length > this.state.todo.length) {
			this.setState({ isDeleted: true })
			setTimeout(() => {
				this.setState({ isDeleted: false })
			}, 1500)
		}

		if (prevState.todo?.length < this.state.todo.length) {
			this.setState({ isCreated: true })
			setTimeout(() => {
				this.setState({ isCreated: false })
			}, 1500)
		}
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
		this.setState(
			(prev) => ({
				todo: prev.todo.map((el) => {
					if (el.id === id) return { ...el, completed: !el.completed }
					else return el
				}),
			}),
			() => localStorage.setItem('todo', JSON.stringify(this.state.todo))
		)
	}

	render() {
		const { isDeleted, isShowModal, todo, isCreated } = this.state
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
				<Header showModal={this.toggleModal} />
				<ProductsList />
				{isShowModal && <Modal hideModal={this.toggleModal}>zxmczmxc</Modal>}

				<FormCreateTodo createTodo={this.createTodo} />
				{todo && <TodoList todo={todo} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />}
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

// const user = {
// 	name: 'Alex',
// 	info: {
// 		name: '',
// 		info2: {
// 			name: '',
// 			description:''
// 		},
// 	},
// }

// user.info&&user.info.info2 && user.info.info2.name
// user.info?.info2?.name
=======
import React, { createContext, useState } from 'react'

import Component2 from './Component2'
import Wrapper3 from './Wrapper3'
import CounterProvider from './context/CounterProvider'

export const ParentCounterContext = createContext()

const App = () => {
	return (
		<CounterProvider>
			<Wrapper3 />
			<Component2 />
		</CounterProvider>

		// <Component1 counter={counter} />
		// <Component2 handleCounter={() => setCounter((prev) => prev + 1)} counter={counter} />
	)
}

export default App
// import React, { createContext, useState } from 'react'

// import Component2 from './Component2'
// import Wrapper3 from './Wrapper3'

// export const CounterContext = createContext()
// export const ParentCounterContext = createContext()

// const App = () => {
// 	const [counter, setCounter] = useState(0)
// 	const increment = () => {
// 		setCounter((prev) => prev + 1)
// 	}
// 	return (
// 		<ParentCounterContext.Provider value={counter}>
// 			<CounterContext.Provider value={{ counter, increment }}>
// 				<Wrapper3 />
// 				<Component2 />
// 			</CounterContext.Provider>
// 		</ParentCounterContext.Provider>
// 		// <Component1 counter={counter} />
// 		// <Component2 handleCounter={() => setCounter((prev) => prev + 1)} counter={counter} />
// 	)
// }

// export default App
>>>>>>> Stashed changes
