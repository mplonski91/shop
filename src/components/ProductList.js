import React from "react";
import { connect } from "react-redux";

import Product from "./Product";
import ProductsContainer from "./ProductsContainer";
import { getProducts } from "../actions/products";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <ProductsContainer>
        {this.props.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.product.data };
};

export default connect(
  mapStateToProps,
  { getProducts: getProducts }
)(ProductList);
