import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import paymentWay from '../../../images/footer.png';

const Footer = () => {
	return (
			<div className="footerbg">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    <div className="col">
                        <img width="150px" src={logo} alt="" />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">About travel crafter</small><br />
                        <small className="m-0">Read our blog</small><br />
                        <small className="m-0">Sign up to our site</small><br />
                        <small className="m-0">Add your opinion</small><br />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View happy clients</small><br />
                        <small className="m-0"> Frequently travelled places</small><br />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <small className="text-light">copyright &copy; reserved Travel Crafter</small>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="text-right text-light">
                            <small>Payment by:</small>
                            <img width="300px" src={paymentWay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

	);
};

export default Footer;