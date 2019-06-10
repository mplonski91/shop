import axios from "axios";

const getProductsRequest = () => ({
  type: "GET_PRODUCTS_REQUEST"
});

const getProductsSuccess = data => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: {
    data
  }
});

const getProductsFailure = () => ({
  type: "GET_PRODUCTS_FAILURE"
});

export const getProducts = () => dispatch => {
  dispatch(getProductsRequest());

  axios
    .get("https://api.jsonbin.io/b/5cf311bee36bab4cf3101423")
    .then(({ data }) => {
      dispatch(getProductsSuccess(data));
    });
};
