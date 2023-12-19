import { useCounterContext } from './context/CounterProvider'

const Component1 = () => {
	const { counter } = useCounterContext()

	return <div>{counter}</div>
}

export default Component1
// import React, { useContext } from 'react'
// import { CounterContext, ParentCounterContext } from './App'

// const Component1 = () => {
// const reyban = useContext(CounterContext)
// 	const reybanYellow = useContext(ParentCounterContext)
// 	console.log('reyban :>> ', reyban)
// 	console.log('reybanYellow :>> ', reybanYellow)
// 	return <div>{reyban.counter}</div>
// }

// export default Component1
