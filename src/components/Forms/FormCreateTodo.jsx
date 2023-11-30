import { Component } from 'react'

class FormCreateTodo extends Component {
	state = {
		title: '',
		description: '',
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value,
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createTodo(this.state)
		this.setState({
			title: '',
			description: '',
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Title
					</label>
					<input
						name='title'
						type='text'
						className='form-control'
						id='exampleInputEmail1'
						value={this.state.title}
						onChange={this.handleChange}
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleInputPassword1' className='form-label'>
						Description
					</label>
					<input
						name='description'
						type='text'
						className='form-control'
						id='exampleInputPassword1'
						value={this.state.description}
						onChange={this.handleChange}
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Create
				</button>
			</form>
		)
	}
}

export default FormCreateTodo
