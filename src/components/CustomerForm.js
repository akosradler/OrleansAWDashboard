import React from 'react';

const CustomerForm = ({ customer, onChange, onSubmit }) => {
  return (
    <form className="form-group">
      <h1>Add Customer</h1>
        <input
          className="form-control"
          type="text"
          name="FirstName"
          placeholder="First Name"
          label="First Name"
          value={customer.firstName}
          onChange={onChange}
        />
        <br/>
        <input
          className="form-control"
          type="text"
          name="LastName"
          placeholder="Last Name"
          label="First Name"
          value={customer.lastName}
          onChange={onChange}
        />
        <br/>
        <input
          className="form-control"
          type="text"
          name="EmailAddress"
          placeholder="Email Address"
          label="Email Address"
          value={customer.title}
          onChange={onChange}
        />
        <br/>
        <input
          className="form-control"
          type="text"
          name="Phone Number"
          placeholder="Phone Number"
          label="Phone Numer"
          value={customer.phone}
          onChange={onChange}
        />
      <br/>
      <input
          type="submit"
          value={'Save'}
          className="btn btn-primary"
          onClick={onSubmit} />
    </form>
  );
};

export default CustomerForm
