import React from "react";
import Product from "./Product";
import ProductService from "../services/products.services";
import ProductsContainer from "./ProductsContainer";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const products = ProductService.getProducts();
    this.setState({
      products
    });
  }

  get products() {
    const { manufacture, search } = this.props;

    if (!manufacture && !search) {
      return this.state.products;
    }

    return this.state.products.filter(
      product =>
        product.manufacture.toLowerCase().includes(manufacture.toLowerCase()) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );
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

export default ProductList;
