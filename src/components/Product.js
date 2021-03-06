import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import {addProductToCart} from "../actions/cart";

const Product = ({ id, image, name, amount, addProductToCart }) => (
  <div className="product">
    <img src={image} alt={name} />
    <p className="price">{amount}</p>
    <h3>{name}</h3>
    <a onClick={() => addProductToCart(id)}>Add to cart</a>
  </div>
);

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default connect(null, {
  addProductToCart
})(Product);
