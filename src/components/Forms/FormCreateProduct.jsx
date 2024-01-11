import { Component } from 'react'

class FormCreateProduct extends Component {
	state = {
		title: '',
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value,
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createProduct(this.state)
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
				<button type='submit' className='btn btn-primary'>
					Create
				</button>
			</form>
		)
	}
}

export default FormCreateProduct
