import React from "react";
import { connect } from "react-redux";

import Product from "./Product";
import ProductsContainer from "./ProductsContainer";
import { getProducts } from "../actions/products";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  get products() {
    const { manufacture, search, products } = this.props

    if(manufacture && search) {
      return products.filter(
        product =>
          product.manufacture === manufacture && product.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if(manufacture) {
      return products.filter(
        product =>
          product.manufacture === manufacture
      )
    }
    if(search) {
      return products.filter(
        product =>
          product.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    return products
  }

  render() {
    return (
      <ProductsContainer>
        {this.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.data,
  };
};

export default connect(
  mapStateToProps,
  { getProducts: getProducts }
)(ProductList);
