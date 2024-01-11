import Post from './components/Post'

const PostsList = ({ posts }) => {
	return posts.map((post) => <Post key={post.id} post={post} />)
}

export default PostsList
