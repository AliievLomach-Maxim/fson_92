import { useCounterContext } from './context/CounterProvider'

const Component2 = () => {
	const { increment } = useCounterContext()
	return (
		<>
			<hr />
			<hr />
			<hr />
			<button onClick={increment}>CLick</button>
		</>
	)
}

export default Component2
// import React, { useContext } from 'react'
// import { CounterContext } from './App'

// const Component2 = () => {
// 	const reyban = useContext(CounterContext)
// 	return (
// 		<>
// 			<hr />
// 			<hr />
// 			<hr />
// 			<button onClick={reyban.increment}>CLick</button>
// 		</>
// 	)
// }

// export default Component2
