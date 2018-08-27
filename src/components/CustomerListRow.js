import React from 'react';
import PropTypes from 'prop-types';

const CustomerListRow = ({ customer }) => {
  return (
    <tr>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.emailAddress}</td>
      <td>{customer.phone}</td>
    </tr>
  );
};

CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;