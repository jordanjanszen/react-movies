import ActorCard from '../../components/ActorCard';

export default function ActorListPage({actors}) {
	const allActors = actors.map(actor => {
		return (
			<ActorCard actor={actor} key={actor} />
		)
	})
	return (
		<div className={'movies'}>
			{allActors}
		</div>
	);
}