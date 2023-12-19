
import React, { createContext, useState } from 'react'

import Component2 from './Component2'
import Wrapper3 from './Wrapper3'
import CounterProvider from './context/CounterProvider'

export const ParentCounterContext = createContext()

const App = () => {
	return (
		<CounterProvider>
			<Wrapper3 />
			<Component2 />
		</CounterProvider>

		// <Component1 counter={counter} />
		// <Component2 handleCounter={() => setCounter((prev) => prev + 1)} counter={counter} />
	)
}

export default App
// import React, { createContext, useState } from 'react'

// import Component2 from './Component2'
// import Wrapper3 from './Wrapper3'

// export const CounterContext = createContext()
// export const ParentCounterContext = createContext()

// const App = () => {
// 	const [counter, setCounter] = useState(0)
// 	const increment = () => {
// 		setCounter((prev) => prev + 1)
// 	}
// 	return (
// 		<ParentCounterContext.Provider value={counter}>
// 			<CounterContext.Provider value={{ counter, increment }}>
// 				<Wrapper3 />
// 				<Component2 />
// 			</CounterContext.Provider>
// 		</ParentCounterContext.Provider>
// 		// <Component1 counter={counter} />
// 		// <Component2 handleCounter={() => setCounter((prev) => prev + 1)} counter={counter} />
// 	)
// }

// export default App
