const Post = ({ post: { body, title } }) => {
	return (
		<div className='card'>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	)
}

export default Post
