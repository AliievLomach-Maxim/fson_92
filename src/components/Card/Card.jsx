import data from '../../data.json'
import css from './Card.module.css'
// import cssSSS from './Card2.module.css'
import clsx from 'clsx'

const Card = () => {
	// if(){
	// 	return
	// }
	//  return
	// const styles = `${css.container} ${el.id % 2 === 0 ? 'online' : 'offline'}`
	return data.map((el) => (
		// <div className={clsx(css.container, 'qwrety')} key={el.id}>
		<div
			className={clsx(el.id % 2 === 0 ? 'online' : 'offline', css.container)}
			// className={clsx({ [css.container]: el.id % 2 === 0 }, 'qwrety')}
			key={el.id}
		>
			{/* <div className={`${css.container} qwerty`} key={el.id}> */}
			{/* {el.id % 2 === 0 ? (
				<h1>OK</h1>
			) : el.id === 5 ? (
				<h2>5</h2>
			) : (
				<h5>False</h5>
			)} */}
			{/* {el.id % 2 === 0 ? <h1>OK</h1> : <h5>False</h5>} */}
			{/* {el.id % 2 === 0 && <h1>OK</h1>} */}
			{/* false true null undefined */}
			<h1>{el.title}</h1>
			<h5>{el.body}</h5>
		</div>
	))
}

export default Card

// function name(params) {
// 	return a === 10 ? true : false
// }

// const user = {
// 	name:'Alex'
// }
// const name ='Alex'
// const user2 = {
// [name]:'qwrety'
// }

// 9%2!==0
