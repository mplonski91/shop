const addProductToCartRequest = () => ({
  type: 'ADD_PRODUCT_TO_CART_REQUEST'
});

const addProductToCartSuccess = product => ({
  type: 'ADD_PRODUCT_TO_CART_SUCCESS',
  payload: product
});
const addProductToCartFailure = () => ({
  type: 'ADD_PRODUCT_TO_CART_FAILURE'
});

export const addProductToCart = productId => (dispatch, getState) => {
  dispatch(addProductToCartRequest());

  return Promise
    .resolve(getState().product.data.find(({id}) => id === productId))
    .then(product => {
      if (product) {
        dispatch(addProductToCartSuccess(product))
      } else {
        throw Error()
      }
    })
    .catch(() => dispatch(addProductToCartFailure()));
};


const removeProductFromCartRequest = () => ({
  type: 'REMOVE_PRODUCT_FROM_CART_REQUEST'
});

const removeProductFromCartSuccess = index => ({
  type: 'REMOVE_PRODUCT_FROM_CART_SUCCESS',
  payload: {
    index
  }
});
const removeProductFromCartFailure = () => ({
  type: 'REMOVE_PRODUCT_FROM_CART_FAILURE'
});

export const removeProductFromCart = productId => dispatch => {
  dispatch(removeProductFromCartRequest());

  return Promise
    .resolve()
    .then(() => dispatch(removeProductFromCartSuccess(productId)))
    .catch(() => dispatch(removeProductFromCartFailure()))
};
