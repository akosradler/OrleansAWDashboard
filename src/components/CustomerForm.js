import React from 'react';

const CustomerForm = ({ customer, onSubmit }) => {
  return (
    <form>
      <h1>Add Customer</h1>
      <input
        type="text"
        name="FirstName"
        placeholder="First Name"
        label="First Name"
        value={customer.firstName}
        onChange={onChange}
        error={errors.title} 
      />

      <input
        type="text"
        name="LastName"
        placeholder="Last Name"
        label="First Name"
        value={customer.lastName}
        onChange={onChange}
        error={errors.title} 
      />

      <input
        type="text"
        name="EmailAddress"
        placeholder="Email Address"
        label="Email Address"
        value={customer.title}
        onChange={onChange}
        error={errors.title} 
      />
      
      <input
        type="text"
        name="Phone Number"
        placeholder="Phone Number"
        label="Phone Numer"
        value={customer.phone}
        onChange={onChange}
        error={errors.title} 
      />

      <input
        type="submit"
        value={'Save'}
        className="btn btn-primary"
        onClick={onSubmit} />
    </form>
  );
};
