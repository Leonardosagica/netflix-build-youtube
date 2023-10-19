import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
	const [show, handleShow] = useState(false);
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

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__contents'>
				<div className='logo__wrapper'>
					<img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427' alt='' />
				</div>
				<div className='searchbar__wrapper'>
					<input className='search__field' type='text' placeholder='Search' />
					<button className='search__button'>Submit</button>
				</div>

				<div className='avatar__wrapper'>
					<Link to='/MainCrud'>
						<img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
