import { createCustomerError, createCustomerSuccess, loadCustomersError, loadCustomersSuccess, beginAddCustomer, beginLoadCustomers } from "../actionCreators/actionCreators";
import {CUSTOMERS_ENDPOINT} from '../apiEndpoints'
import axios from "axios";

export function loadCustomers() {
  return (dispatch) => {
    dispatch(beginLoadCustomers());
    return axios.get(CUSTOMERS_ENDPOINT)
      .then(customers => {
        dispatch(loadCustomersSuccess(customers));
      }).catch(error => {
      dispatch(loadCustomersError(error));
      throw(error);
    });
  };
}
  
export function createCustomer(customer) {
  return (dispatch) => {
    dispatch(beginAddCustomer());
    return axios.post(CUSTOMERS_ENDPOINT,{customer})
      .then(customer => {
          dispatch(createCustomerSuccess(customer));
        }).catch(error => {
      dispatch(createCustomerError(error));
      throw(error);
    });
  };
}