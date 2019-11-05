import AUTH from './types';

const initialState = {
  loading: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH.REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
