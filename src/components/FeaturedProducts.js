import React, { Component } from "react";
import Product from "./Product";
import ProductService from "../services/products.services";
import SmallHeading from "./SmallHeading";
import ProductContainers from "./ProductsContainer";

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const products = ProductService.getProductByCategory(this.props.category);
    this.setState({
      products
    });
  }

  render() {
    return (
      <div>
        <SmallHeading text={this.props.heading} />
        <ProductContainers>
          {this.state.products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </ProductContainers>
      </div>
    );
  }
}

export default FeaturedProducts;
