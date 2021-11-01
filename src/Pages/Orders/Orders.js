import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import Order from './Order';

const Orders = () => {
   const [orders, setOrders] = useState([])
   const { getSavedCart } = useCart();
   const cart = getSavedCart();
   const names = Object.keys(cart)
   useEffect(() => {
      fetch('https://gentle-springs-26291.herokuapp.com/orders', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(names)
      })
         .then(res => res.json())
         .then(order => setOrders(order))
   }, [names])
   return (
      <div>
         <h1 className='py-3 bg-info text-light'>Your Orders</h1>
         <div className='mx-3 my-3'>
            {
               orders.length > 0 ?
                  <div>
                     {
                        orders.map(order => <Order key={order._id} order={order}></Order>)
                     }
                     <Link to='/schedule' className='btn btn-info'>Confirm All Tour</Link>
                  </div>
                  :
                  <div className='my-4'>
                     <h1>Boring Time??????</h1>
                     <h3>Lets Make a Tour....</h3>
                     <Link className='text-decoration-none fw-bold btn btn-info' to='/services'>Order Now</Link>
                  </div>
            }
         </div>
      </div>
   );
};

export default Orders;