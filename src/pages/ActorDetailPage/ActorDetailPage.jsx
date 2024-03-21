import {useLocation} from 'react-router-dom';

export default function MovieDetailPage() {
	const location = useLocation();
	const actor = location.state.actor;
	return (
		<div>
			<h1>{actor}</h1>
		</div>
	);
}