import React from "react";
import PropTypes from "prop-types";

const Product = ({ image, name, amount }) => (
  <div className="product">
    <img src={image} alt={name} />
    <p className="price">{amount}</p>
    <h3>{name}</h3>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default Product;
