import React, {PropTypes} from 'react';

const CustomerListRow = ({customer}) => {
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
  customer: PropTypes.shape({
    firstName: Proptypes.string.isRequired,
    lastName: Proptypes.string.isRequired, 
    emailAddress: Proptypes.string.isRequired,
    phone: Proptypes.string.isRequired  
  }).isRequired
};

export default CustomerListRow;