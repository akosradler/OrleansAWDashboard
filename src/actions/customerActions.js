import { createCustomerError } from "../actionCreators/actionCreators";

export function loadCustomers() {
  return (dispatch) => {
    dispatch(beginLoadCustomers());
    return customerApi.loadCustomers()
      .then(customers => {
        dispatch(loadCustomersSuccess(customers));
      }).catch(error => {
      throw(error);
    });
  };
}
  
export function createCustomer(customer) {
  return (dispatch) => {
    dispatch(beginSaveCustomer());
    return customerApi.createCustomer(customer)
      .then(customer => {
          dispatch(createCustomerSuccess(customer));
        }).catch(error => {
      dispatch(createCustomerError(error));
      throw(error);
    });
  };
}