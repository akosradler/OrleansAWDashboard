import React, {PropTypes} from 'react';
import CustomerListRow from './CustomerListRow';

const CustomerList = ({customers}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email Address</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
      {customers.map(customer =>
        <CustomerListRow key={customer.id} customer={customer}/>
      )}
      </tbody>
    </table>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
