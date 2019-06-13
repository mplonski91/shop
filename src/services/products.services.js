import axios from "axios";

class ProductsServices {
  static getProducts() {
    return axios
      .get("http://react2018-shop.s3-website-eu-west-1.amazonaws.com/")
      .then(({ data }) => data);
  }

  static getProductByCategory(category) {
    return ProductsServices.getProducts().then(products =>
      products.filter(
        product => product.category === category && product.featured === true
      )
    );
  }

  static getManufactures() {
    return ProductsServices.getProducts()
      .then(products => products.map(product => product.manufacture).sort())
      .then(products => Array.from(new Set(products)));
  }
}

export default ProductsServices;
