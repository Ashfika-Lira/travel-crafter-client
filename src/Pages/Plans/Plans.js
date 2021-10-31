import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import usePlan from '../hooks/usePlan';
import SinglePlan from '../SinglePlan/SinglePlan';
// import './Foods.css';

const Plans = () => {
    const { plans, setPlans } = usePlan();

    const { carts } = useAuth();
    const [cart, setCart] = carts;

	const [selectedPlans, setSelectedPlans] = useState([]);

	useEffect(() => {
        const allPlans = [...plans];
        setSelectedPlans(allPlans);
    }, [plans])

	return (
        <div className="container">
            <h1 className=" text-center  text-white bg-secondary mt-4">Our popular packages</h1>
			<p className="text-center mt-3">
       " We are here to serve you the best as always. we are very consistent about our services. "
      </p>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
                {
                    selectedPlans?.map(plan => <SinglePlan key={plan.id} plan={plan} />)
                }
            </div>
            <div className="mt-4 mb-5 text-center">
                {
                    cart.length > 0 ? <Link to='/checkout'>
                        <button className="btn btn-success btn-lg">Checkout Order</button>
                    </Link> : <button disabled className="btn btn-success btn-lg">Checkout Order</button>
                }
            </div>
        </div>
    );
};

export default Plans;