const initalState = {
  isFeching: false,
  isFetched: false,
  data: []
};

export default (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCTS_REQUEST": {
      return {
        ...state,
        isFeching: true
      };
    }
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        isFeching: false,
        isFetched: true,
        data: payload.data
      };
    }
    case "GET_PRODUCTS_FAILURE": {
      return {
        ...state,
        isFeching: false,
        isFetched: false
      };
    }

    default:
      return state;
  }
};
