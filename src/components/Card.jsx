import data from '../data.json'

const Card = () => {
	return data.map((el, ind) => (
		<div className='container' key={el.id}>
			<h1>{el.title}</h1>
			<h5>{el.body}</h5>
		</div>
	))
}

export default Card
