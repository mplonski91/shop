import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import SmallHeading from "./SmallHeading";
import ProductContainers from "./ProductsContainer";
import { getProducts } from "../actions/products";

class FeaturedProducts extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <SmallHeading text={this.props.heading} />
        <ProductContainers>
          {this.props.products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </ProductContainers>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.product.data.filter(
    product =>
      product.category === ownProps.category && product.featured === true
  )
});

export default connect(
  mapStateToProps,
  { getProducts: getProducts }
)(FeaturedProducts);
