import styled from 'styled-components'

export const Container = styled('div')(({ id }) => {
	const isOnline = id % 2 === 0
	return {
		textAlign: 'center',
		h1: {
			color: isOnline ? 'green' : 'red',
		},
	}
})
