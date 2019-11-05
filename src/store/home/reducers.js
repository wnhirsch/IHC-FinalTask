import HOME from './types';

const initialState = {
  loading: false,
  error: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case HOME.REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
