import {Link} from 'react-router-dom';

export default function MovieCard({movie}) {
	return (
		<Link to={`/movies/${movie.title}`} state={{movie}}>
			<div className={'card'} style={{backgroundImage: `url(${movie.posterPath})`}}>
				<div>
					<h3>{movie.title}</h3>
				</div>
				<div>
					<h4>{movie.releaseDate}</h4>
				</div>
			</div>
		</Link>
	)
}