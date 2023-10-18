/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
	/* BAR TRANSITION */
	const [show, handleShow] = useState(false);
	/* const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]); */
	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => {
			window.removeEventListener('scroll', transitionNavBar);
		};
	}, []);

	/* BAR SEARCH */
	/* const handleSearchInputChange = event => {
		setSearchQuery(event.target.value);
	}; */

	/* const searchMovies = async () => {
		try {
			const response = await fetch(`your-movie-api-url?query=${searchQuery}`);
			const data = await response.json();
			setSearchResults(data.results);
		} catch (error) {
			console.log('Error searching movies:', error);
		}
	}; */

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__contents'>
				<div className='logo__wrapper'>
					<img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427' alt='' />
				</div>
				<div className='searchbar__wrapper'>
					<input className='search__field' type='text' placeholder='Search' /* value={searchQuery} onChange={handleSearchInputChange} */ />
					<button className='search__button' /* onClick={searchMovies} */>Submit</button>
					{/* <div>
						{searchResults.map(movie => (
							<div key={movie.id}>{movie.title}</div>
						))}
					</div> */}
				</div>

				<div className='avatar__wrapper'>
					<Link to='/CRUD/MainCrud'>
						<img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
