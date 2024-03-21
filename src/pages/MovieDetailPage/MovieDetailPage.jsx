import {Link, useLocation} from 'react-router-dom';

export default function MovieDetailPage() {
	const movie = useLocation().state.movie;
	const allCast = movie.cast.map(actor => {
		return (
			<>
				<span>
					<Link to={`/actors/${actor}`} state={{actor}}>
						{actor}
					</Link>, </span>
			</>
		)
	});
	return (
		<div>
			<h1>{movie.title}</h1>
			<h2>{movie.releaseDate}</h2>
			<div>{allCast}</div>
			<img src={movie.posterPath} alt="movie poster"/>
		</div>
	);
}