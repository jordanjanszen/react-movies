import {Link} from 'react-router-dom';

export default function ActorCard({actor}) {
	const rand = Math.floor(Math.random() * 100000000)
	return (
		<Link to={`/actors/${actor}`} state={{actor}}>
			<div className={'card'} style={{backgroundImage: `url(https://picsum.photos/400/?t=${rand}`}} >
				<h3>{actor}</h3>
			</div>
		</Link>
	)
}