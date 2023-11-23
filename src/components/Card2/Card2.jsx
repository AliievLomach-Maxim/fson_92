import data from '../../data.json'

import styled from 'styled-components'
import { Container } from './Card2.styled'

// const Container = styled('div')`
// 	background-color: black;
// 	text-align: center;
// `
// const Container = styled.div`
// 	background-color: black;
// 	text-align: center;
// 	& > h1 {
// 		color: ${({ id }) => (id % 2 === 0 ? 'green' : 'red')};
// 		color: ${({ id }) => (id % 2 === 0 ? 'green' : 'red')};
// 	}
// `
// const Container = styled('div')(({ id }) => {
// 	const isOnline = id % 2 === 0
// 	return {
// 		textAlign: 'center',
// 		h1: {
// 			color: isOnline ? 'green' : 'red',
// 		},
// 	}
// })

const Card2 = () => {
	return data.map((el, ind) => (
		<Container key={el.id} id={el.id}>
			<h1>{el.title}</h1>
			<h5>{el.body}</h5>
		</Container>
	))
}

const Card2Styled = styled(Card2)`
	background-color: #ff0000;
`
export default Card2
