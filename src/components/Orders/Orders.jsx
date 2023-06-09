import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const cart =  useLoaderData()
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h2>Orders Page: {cart.length}</h2>
            </div>
            <div>
                <Cart  cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Orders;