import Header from './components/Header/Header'
import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'
import { Component } from 'react'

class App extends Component {
	state = {
		isShowModal: false,
	}

	// showModal = () => {
	// 	this.setState({
	// 		isShowModal: true,
	// 	})
	// }

	// hideModal = () => {
	// 	this.setState({
	// 		isShowModal: false,
	// 	})
	// }
	toggleModal = () => {
		this.setState((prev) => ({
			isShowModal: !prev.isShowModal,
		}))
	}
	render() {
		return (
			<>
				<Header showModal={this.toggleModal} />
				<Counter name='Alex' />
				{this.state.isShowModal && (
					<Modal hideModal={this.toggleModal}>zxmczmxc</Modal>
				)}
			</>
		)
	}
}

export default App
