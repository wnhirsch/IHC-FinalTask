import { composeWithDevTools } from 'remote-redux-devtools';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/reducers';
import homeReducer from './home/reducers';
import wishedWinesReducer from './wishedWines/reducers';
import offeredWinesReducer from './offeredWines/reducers';

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  wishedWines: wishedWinesReducer,
  offeredWines: offeredWinesReducer,
});

const STORE = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default STORE;
