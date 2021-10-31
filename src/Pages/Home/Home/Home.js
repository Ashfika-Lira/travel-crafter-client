import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Plan from '../Plan/Plan';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
            <About></About>
			<Plan></Plan>
			<Contact></Contact>
		</div>
	);
};

export default Home;