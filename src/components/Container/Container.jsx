import './Container.css'
import css from './Container.module.css'

const Container = ({ children }) => {
	return (
		// <div style={{ textAlign: 'center' }}>
		// <div className='container'>
		<div className={css.container}>
			<h1>Container</h1>
			{children}
		</div>
	)
}

export default Container
