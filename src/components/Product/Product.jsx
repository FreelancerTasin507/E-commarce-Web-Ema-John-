import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const handleproduct = props.handleproduct;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <small>Manufacturer: {seller}</small> <br />
        <small>Ratings: {ratings} Stars</small>
      </div>
      <button
        onClick={() => handleproduct(props.product)}
        className="button-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
