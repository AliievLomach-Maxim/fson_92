import { useEffect } from 'react'

const Modal = ({ children, hideModal }) => {
	// const handleEsc = (e) => {
	// 	if (e.code === 'Escape') hideModal()
	// 	console.log('Press')
	// }

	useEffect(() => {
		const handleEsc = (e) => {
			if (e.code === 'Escape') hideModal()
			console.log('Press')
		}
		document.addEventListener('keydown', handleEsc)
		return () => {
			document.removeEventListener('keydown', handleEsc)
			console.log('UNMOUNT')
		}
	}, [hideModal])

	// componentDidMount() {
	// 	document.addEventListener('keydown', this.handleEsc)
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener('keydown', this.handleEsc)
	// }
	return (
		<div className='modal fade show' style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={hideModal}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
