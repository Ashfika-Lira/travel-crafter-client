import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Plan.css";

const Plan = () => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);
  return (
    <div className="container w-100 m-auto p-5">
      
      <h1 className="Popular-service text-center  text-white bg-secondary">Our most popular services</h1>
      <p className="text-center mt-3">
        We are here to serve you the best as always. we are very consistent about our services.
      </p>

      <div className="row">
        {plan.map((data) => (
          <div key={data.key} className="col-md-6 col-lg-4 col-sm-12">
            <div className="card p-3 m-2 border border">
              <div className="service-img">
                <img className="img-fluid" src={data.img} alt="category" />
              </div>
              <h6 className="mt-4">{data.name}</h6>
              <h6 className="mt-4">{data.price}</h6>
              <p className="mt-2">{data.description.slice(0, 100)}</p>
              <div className="text-center d-block">
                    <Link to={`detail/${data.key}`}>
                        <button className="btn btn-danger w-100">Book now</button>
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;