const initalState = {
  isFeching: false,
  isFetched: false,
  data: [],
  manufacturers: [],
  selected: ''
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
        data: payload.data,
        manufacturers: payload.manufacturers,
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
