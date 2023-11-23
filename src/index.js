// import React from 'react'
// import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)

// const div = document.createElement('div')
// div.className = 'qwe'
// div.id = 'qwe'

const root = document.getElementById('root')
// root.append(div)

// const p = React.createElement('p', { id: '123', className: '321',children:'qrwety' })
// const div = React.createElement('div', {
// 	id: 'qrwety',
// 	className: 'qwerty',
// 	children: [p, p],
// })

// JSX

// const content = (
// 	<p id='qwe' className='asdasd'>
// 		FSON 92
// 	</p>
// )

// const div2 = (
// 	<div id='qwe' className='qrwety'>
// 		{content}
// 	</div>
// )

// // const Div3 = (props) => {
// const Div3 = ({ age, name }) => {
// 	// props.age
// 	return (
// 		<div id='qweqweqwe' className='qrwety123'>
// 			{content}
// 			<img src='asd' alt='qwe' />
// 		</div>
// 	)
// }

// const Container = () => (
// 	<>
// 		{div2}
// 		<div></div>
// 		<p></p>
// 		<Div3 name='Alex' age={30} />
// 		{Div3({ name: 'Alex', age: 30 })}
// 		{Div3({ age: 25, name: 'Bob' })}
// 	</>
// )

// console.log('div :>> ', div)
ReactDOM.createRoot(root).render(<App />)

// function fn() {
//   const name = 'Alex'
//   const age = 30
//   return {name , age}
// }
