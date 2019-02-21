import products from "../products";

class ProductsServices {
  static getProducts() {
    return products;
  }

  static getProductByCategory(category) {
    return products.filter(
      product => product.category === category && product.featured === true
    );
  }

  static getManufactures() {
    return [...new Set(products.map(product => product.manufacture).sort())];
  }
}

export default ProductsServices;
