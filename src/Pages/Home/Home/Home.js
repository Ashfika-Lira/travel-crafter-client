import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../../Services/Services';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
            <About></About>
			<Services></Services>
			<Contact></Contact>
		</div>
	);
};
