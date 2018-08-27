import * as actionTypes from './actions'
import {CUSTOMERS_ENDPOINT} from '../apiEndpoints'
import axios from "axios";
import toastr from 'toastr'


export function loadCustomersSuccess(customers) {
  return { type: actionTypes.LOAD_CUSTOMERS_SUCCESS, customers};
}

export function addCustomerSuccess(customer) {
  return {type: actionTypes.ADD_CUSTOMER_SUCCESS, customer};
}

export function loadCustomersError() {
  return { type: actionTypes.LOAD_CUSTOMERS_ERROR};
}

export function addCustomerError() {
  return {type: actionTypes.ADD_CUSTOMER_ERROR};
}

export function beginLoadCustomers() {
  return { type: actionTypes.BEGIN_LOAD_CUSTOMERS};
}

export function beginAddCustomer() {
  return {type: actionTypes.BEGIN_ADD_CUSTOMER};
}

export function loadCustomers() {
  return (dispatch) => {
    dispatch(beginLoadCustomers());
    return axios.get(CUSTOMERS_ENDPOINT)
      .then(customers => {
        dispatch(loadCustomersSuccess(customers));
      }).catch(error => {
      dispatch(loadCustomersError(error));
      toastr.error("Failed to fetch data from the API")
    });
  };
}
  
export function addCustomer(customer) {
  return (dispatch) => {
    dispatch(beginAddCustomer());
    return axios.post(CUSTOMERS_ENDPOINT,{customer})
      .then(customer => {
          dispatch(addCustomerSuccess(customer));
        }).catch(error => {
      dispatch(addCustomerError(error));
      toastr.error("Failed to add customer")
    });
  };
}