import React from 'react';
import PropTypes from 'prop-types';

const CustomerListRow = ({ customer }) => {
  return (
    <tr>
      <td>{customer.FirstName}</td>
      <td>{customer.LastName}</td>
      <td>{customer.EmailAddress}</td>
      <td>{customer.Phone}</td>
    </tr>
  );
};

CustomerListRow.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerListRow;