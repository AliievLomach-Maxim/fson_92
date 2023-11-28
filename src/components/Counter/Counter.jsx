import { Component } from 'react'

// let counter = {name:''}
// counter = {age:30}
// counter=counter+1

class Counter extends Component {
	state = {
		counter: 0,
		name: this.props.name,
		items: ['qwe'],
	}
	// if(state!==state)render()
	// handleClick = () => {
	// 	// this.state.counter++
	// 	// this.setState({
	// 	// 	counter: 12,
	// 	// 	name: 'qwe',
	// 	// })
	// this.setState((prevState) => {
	// 	return {
	// 		counter: prevState.counter + 1,
	// 	}
	// })
	// this.setState((prev) => ({
	// 	counter: prev.counter + 1,
	// }))
	// }
	handleIncrement = () => {
		this.setState((prev) => ({
			counter: prev.counter + 1,
		}))
		console.log(this.state)
	}

	handleDecrement = () =>
		this.setState((prev) => ({
			counter: prev.counter - 1,
		}))

	render() {
		// console.log('state :>> ', this.state)
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div className='card bg-dark text-white ' style={{ width: '600px' }}>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p className='card-text  text-center' style={{ fontSize: '80px' }}>
							{this.state.counter}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button
								className='btn btn-outline-success me-5'
								onClick={this.handleIncrement}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button
								className='btn  btn-outline-danger ms-5'
								onClick={this.handleDecrement}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	s
}

export default Counter
// const handleClick = (params) => {

// }
// document.addEventListener('click', ()=>{}())
