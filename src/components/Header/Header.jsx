import { Component, PureComponent } from 'react'

class Header extends PureComponent {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.showModal !== this.props.showModal ? true : false
	// 	// if (nextProps.showModal !== this.props.showModal) return true
	// 	// if (nextProps.name !== this.props.showModal) return true
	// 	// if (nextProps.info !== this.props.showModal) return true
	// 	// if (nextProps.todo !== this.props.showModal) return true
	// 	// if (nextProps.address !== this.props.address) return true
	// 	// if (nextProps.address.street !== this.props.address.street) return true
	// 	// if (nextProps.showModal !== this.props.showModal) return true
	// 	// return false
	// }

	render() {
		console.log('render Header')
		const { showModal } = this.props
		return (
			<nav className='navbar bg-dark mb-3'>
				<div className='container-fluid'>
					<span className='navbar-brand mb-0 h1 text-success'>Navbar</span>
					<button className='btn btn-outline-success' onClick={showModal}>
						Open Modal
					</button>
				</div>
			</nav>
		)
	}
}

export default Header
