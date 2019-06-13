import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import {removeProductFromCart} from "../actions/cart";

const CartProduct = ({ id, image, name, amount, quantity, removeProductFromCart }) => (
  <div className="product">
    <img src={image} alt={name} />
    <p className="price">{amount}</p>
    <h3>{name}</h3>
    <p>Quantity: {quantity}</p>
    <a onClick={() => removeProductFromCart(id)}>Remove from cart</a>
  </div>
);

CartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default connect(null, {
  removeProductFromCart
})(CartProduct);
