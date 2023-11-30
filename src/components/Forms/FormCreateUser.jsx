import { Component } from 'react'

class FormCreateUser extends Component {
	state = {
		name: '',
		lastName: '',
	}
	// handleChange = (event) => {

	handleChange = ({ target: { value, name } }) => {
		console.log('value :>> ', value)
		// if (value === 'a') return
		// if (value.includes('@') || value.includes('!')) return
		// const result =validator(value)
		// if(!result) return
		this.setState({
			[name]: value,
		})
		// if (name === 'email')
		// 	this.setState({
		// 		[name]: value,
		// 	})
		// else if (name === 'password')
		// 	this.setState({
		// 		password: value,
		// 	})
		// else
		// 	this.setState({
		// 		value1: value,
		// 	})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		// console.log(this.state)

		this.props.sendUserData(this.state)
	}
	render() {
		console.log('this.state :>> ', this.state)
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Name
					</label>
					<input
						name='name'
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Last Name
					</label>
					<input
						name='lastName'
						type='text'
						className='form-control'
						id='exampleInputPassword1'
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		)
	}
}

export default FormCreateUser
