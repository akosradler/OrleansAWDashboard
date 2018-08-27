import { combineReducers } from 'redux';
import customers from './customersReducer';

const rootReducer = combineReducers({
  customers
});

export default rootReducer;