import ProductsService from '../services/products.services'

const getProductsRequest = () => ({
  type: "GET_PRODUCTS_REQUEST"
});

const getProductsSuccess = (data, manufacturers) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: {
    data,
    manufacturers
  }
});

const getProductsFailure = error => ({
  type: "GET_PRODUCTS_FAILURE",
  error,
});

export const getProducts = () => dispatch => {
  dispatch(getProductsRequest());

  ProductsService.getProducts()
    .then(products => {
      const manufacturers = Array.from(new Set(products
        .map(product => product.manufacture)
        .sort()))

      dispatch(getProductsSuccess(products, manufacturers));
    })
    .catch(err => dispatch(getProductsFailure(err)));
};
