import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/error.png';

const NotFound = () => {
	return (
		<div>
			 <img style={{ width: '100%'}} src={notfound} alt="" />
            <Link to="/"><h1 className="try-again text-danger text-center">404!!! Not Found </h1>
            </Link>
		</div>
	);
};

export default NotFound;