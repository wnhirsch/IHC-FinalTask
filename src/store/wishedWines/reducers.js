import WISHED_WINES from './types';

const initialState = {
  wines: [],
  loading: false,
  error: '',
};

const wishedWinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHED_WINES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WISHED_WINES.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        wines: action.payload,
      };
    case WISHED_WINES.REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wishedWinesReducer;
