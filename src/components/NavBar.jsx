// NavBar.js

import {NavLink} from 'react-router-dom';

export default function NavBar({user, setUser}) {
	function handleLogout(evt) {
		evt.preventDefault();
		setUser(null);
	}
	
	return (
		<nav>
			<NavLink to={'/'}>Movies</NavLink>
			&nbsp;|&nbsp;
			<NavLink to={'/actors'}>Actors</NavLink>
			&nbsp;|&nbsp;
			<span>Hello {user}</span>
			&nbsp;|&nbsp;
			<span onClick={handleLogout}>Logout</span>
		</nav>
	);
}