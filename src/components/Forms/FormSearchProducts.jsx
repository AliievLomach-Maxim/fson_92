import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FormSearchProducts = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const [searchParams, setSearchParams] = useSearchParams()

	const handleSubmit = (e) => {
		e.preventDefault()
		setSearchParams({ search: searchQuery })
		// submit(searchQuery)
	}

	const handleChange = ({ target: { value } }) => {
		setSearchQuery(value)
	}

	useEffect(() => {
		!searchQuery && setSearchQuery(searchParams.get('search'))
	}, [searchParams, searchQuery])

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputSearch' className='form-label'>
					Title
				</label>
				<input
					name='search'
					type='text'
					className='form-control'
					id='exampleInputSearch'
					value={searchQuery}
					onChange={handleChange}
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Search
			</button>
		</form>
	)
}

export default FormSearchProducts
