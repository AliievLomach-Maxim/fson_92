import { useDispatch, useSelector } from 'react-redux'
import PostsList from '../components/PostsList'
import { getAllPostsThunk } from '../store/posts/thunks'
import { useEffect } from 'react'
import { postsSelector } from '../store/posts/selectors'

const PostsPage = () => {
	const dispatch = useDispatch()
	const posts = useSelector(postsSelector)

	useEffect(() => {
		!posts && dispatch(getAllPostsThunk())
	}, [dispatch, posts])

	return posts && <PostsList posts={posts} />
}

export default PostsPage
