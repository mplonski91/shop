import React from "react";
import { connect } from "react-redux";

import CartProduct from "./CartProduct";
import ProductsContainer from "./ProductsContainer";
import { getProducts } from "../actions/products";

class Cart extends React.Component {
  get products() {
    return this.props.products
  }

  render() {
    return (
      <ProductsContainer>
        {this.products.map(product => (
          <CartProduct key={product.id} {...product} />
        ))}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.cart.data),
  };
};

export default connect(
  mapStateToProps,
  { getProducts: getProducts }
)(Cart);
