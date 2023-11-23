import Card from './components/Card/Card'
import Card2 from './components/Card2'
import Container from './components/Container/Container'

const App = () => {
	return (
		<>
			<Container>
				<Card />
				{/* {Card()} */}
			</Container>
			{/* <Container children={<Card/>}/> */}
			<Container>
				<div>qrwety</div>
			</Container>
			<Card2 />
		</>
	)
}

export default App
