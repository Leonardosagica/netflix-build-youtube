import React, { useEffect, useState } from 'react';
import axios from '../server/axios';
import './Row.css';
import { Link } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = 'https://image.tmdb.org/t/p/original';

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className='row'>
			<h2>{title}</h2>

			<div className='row__posters'>
				{movies.slice(0, 10).map(
					movie =>
						((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
							<Link to={`/detail/${movie.id}`} key={movie.id}>
								<img className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
							</Link>
						),
				)}
			</div>
		</div>
	);
}

export default Row;
