import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='/todo'>Todo</NavLink>
					</li>
					<li>
						<NavLink to='/pages'>Pages</NavLink>
					</li>
					<li>
						<NavLink to='/posts'>Posts</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
