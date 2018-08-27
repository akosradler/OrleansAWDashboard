import * as actionTypes from '../actions/actions'

export function loadCustomersSuccess(customers) {
    return {type: actionTypes.LOAD_CUSTOMERS_SUCCESS, customers};
  }

export function loadCustomersError() {
  return {type: actionTypes.LOAD_CUSTOMERS_ERROR};
}

export function addCustomerSuccess(customer) {
  return {type: actionTypes.ADD_CUSTOMER_SUCCESS, customer};
}

export function addCustomerError() {
  return {type: actionTypes.ADD_CUSTOMER_ERROR};
}

export function beginLoadCustomers() {
  return {type: actionTypes.BEGIN_LOAD_CUSTOMERS};
}

export function beginAddCustomer() {
  return {type: actionTypes.BEGIN_ADD_CUSTOMER};
}
