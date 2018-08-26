import * as actionTypes from '../actions/actions'

export function loadCustomersSuccess(customers) {
    return {type: actionTypes.LOAD_CUSTOMERS_SUCCESS, customers};
  }

export function loadCustomersError() {
  return {type: actionTypes.LOAD_CUSTOMERS_ERROR};
}

export function createCustomerSuccess(customer) {
  return {type: actionTypes.CREATE_CUSTOMER_SUCCESS, customer};
}

export function createCustomerError() {
  return {type: actionTypes.CREATE_CUSTOMER_ERROR};
}

export function beginLoadCustomers() {
  return {type: actionTypes.BEGIN_LOAD_CUSTOMERS};
}

export function beginCreateCustomer() {
  return {type: actionTypes.BEGIN_CREATE_CUSTOMER};
}
