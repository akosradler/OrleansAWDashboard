import * as actions from '../actions/actions';

export default function customersReducer(state = [], action) {
    switch (action.type) {
      case actions.LOAD_CUSTOMERS_SUCCESS:
        return action.customers;
  
      case actions.ADD_CUSTOMER_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.customer)
        ];
      
      default:
        return state;
    }
}