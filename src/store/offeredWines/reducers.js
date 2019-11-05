import OFFERED_WINES from './types';

const initialState = {
  wines: [],
  loading: false,
  error: '',
};

const offeredWinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFERED_WINES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OFFERED_WINES.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        wines: action.payload,
      };
    case OFFERED_WINES.REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default offeredWinesReducer;
