const initialState = {
  isFetching: false,
  isFetched: false,
  data: {},
  indexes: [],
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ('ADD_PRODUCT_TO_CART_REQUEST'): {
      return {
      ...state,
          isFetching: true
      }
    }

    case ('ADD_PRODUCT_TO_CART_SUCCESS'): {
      const productData = state.data[payload.id];
      const indexes = new Set(state.indexes);
      indexes.add(payload.id);

      return {
      ...state,
          data: {
        ...state.data,
            [payload.id]: {
          ...productData,
          ...payload,
              quantity: productData ? productData.quantity + 1 : 1
          }
        },
        indexes: Array.from(indexes),
          isFetching: false,
          isFetched: true
      }
    }

    case ('REMOVE_PRODUCT_FROM_CART_SUCCESS'): {
      const indexes = state.indexes.filter(index => index !== payload.index);
      const { [payload.index]: _, ...newData } = state.data;

      return {
        ...state,
        data: newData,
        indexes
      }
    }

    case ('ADD_PRODUCT_TO_CART_FAILURE'): {
      return {
      ...state,
          isFetching: false,
          isFetched: false
      }
    }

    default:
      return state
  }
}
