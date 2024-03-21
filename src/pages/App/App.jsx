import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {movies} from '../../data';

import LoginPage from '../LoginPage/LoginPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';

import NavBar from '../../components/NavBar';

export default function App() {
	const [user, setUser] = useState(null);
	const uniqueActors = new Set();
	movies.forEach(m => m.cast.forEach(a => uniqueActors.add(a)));
	
	return (
		<div className="App">
			{user ?
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path={'/'} element={<MoviesListPage movies={movies}/>}/>
						<Route path={'/movies/:movieName'} element={<MovieDetailPage/>}/>
						<Route path={'/actors'} element={<ActorListPage actors={[...uniqueActors]}/>}/>
						<Route path={'/actors/:actorName'} element={<ActorDetailPage/>}/>
					</Routes>
				</>
				:
				<LoginPage setUser={setUser}/>
			}
		</div>
	);
}