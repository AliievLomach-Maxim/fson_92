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
		console.log('render')
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
