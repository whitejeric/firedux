import { combineReducers } from 'redux';
import StoreReducer from './reducer-store';

const rootReducer = combineReducers({
  store: StoreReducer
});

export default rootReducer;
