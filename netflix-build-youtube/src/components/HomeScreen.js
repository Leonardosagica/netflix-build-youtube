import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';
import requests from '../server/Requests';
import Row from './Row';

function HomeScreen() {
	const rowItems = [
		{ title: 'NETFLIX ORIGINALS', fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
		{ title: 'Trending Now', fetchUrl: requests.fetchTrending },
		{ title: 'Top Rated', fetchUrl: requests.fetchTopRated },
		{ title: 'Action Movies', fetchUrl: requests.fetchActionMovies },
		{ title: 'Comedy Movies', fetchUrl: requests.fetchComedyMovies },
		{ title: 'Horror Movies', fetchUrl: requests.fetchHorrorMovies },
		{ title: 'Romance Movies', fetchUrl: requests.fetchRomanceMovies },
		{ title: 'Documentaries', fetchUrl: requests.fetchDocumentaries },
	];

	return (
		<div className='homeScreen'>
			<Nav />
			<Banner />
			{rowItems.map((rowItem, index) => (
				<Row key={index} title={rowItem.title} fetchUrl={rowItem.fetchUrl} isLargeRow={rowItem.isLargeRow} />
			))}
		</div>
	);
}

export default HomeScreen;
