import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PageDetail.css';

function PageDetail() {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState(null);

	const base_url = 'https://image.tmdb.org/t/p/original';
	const API_KEY = '7cbe198016fcb526950dc2a755f9e135';

	useEffect(() => {
		async function fetchMovieDetails() {
			try {
				const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
				setMovieDetails(response.data);
			} catch (error) {
				console.log('Error:', error);
			}
		}

		fetchMovieDetails();
	}, [id]);

	return (
		<div className='details__content'>
			{movieDetails !== null ? (
				<div className='details__wrapper'>
					<img src={`${base_url}${movieDetails.poster_path}`} alt={movieDetails.title} />
					<h1>{movieDetails.title}</h1>
					<p>{movieDetails.overview}</p>
					<p>Rating: {movieDetails.vote_average}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default PageDetail;
