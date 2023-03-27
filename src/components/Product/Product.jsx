import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,price,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <small>Manufacturer: {seller}</small> <br />
            <small>Ratings: {ratings} Stars</small>
            </div>
            <button className='button-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;