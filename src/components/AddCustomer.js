import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as customerActions from '../actions/customerActions'
import CustomerForm from './CustomerForm';
import validator from 'react-validation';
import toastr from 'toastr';

export class AddCustomer extends React.Component {
  state = {
    customer: Object.assign({})
  }

  isValidInput = () => {
    let isValid = true;

    if (this.state.customer.firstName.trim().length < 0) {
      toastr.error = 'First Name must be entered';
      isValid = false;
    }
    if (this.state.customer.lastName.trim().length < 0) {
      toastr.error = 'Last Name must be entered';
      isValid = false;
    }
    if (!validator.isEmail(this.state.customer.emailAddress)) {
      toastr.error = 'Valid email address must be entered';
      isValid = false;
    }
    if (!validator.isMobilePhone(this.state.customer.phone)) {
      toastr.error = 'Valid phone number must be entered';
      isValid = false;
    }
    return isValid;
  }

  updateCustomer = (event) => {
    let customer = Object.assign({}, this.state.customer);
    customer[event.target.name] = event.target.value;
    return this.setState({customer: customer});
  }

  addCustomer = (event) => {
    event.preventDefault();

    if (!this.isValidInput()) {
      return;
    }

    this.props.actions.addCustomer(this.state.customer)
      .then(() => {
        toastr.success('Customer Added');
        this.context.router.push('/customers');
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    return (
      <CustomerForm
        onSubmit={this.addCustomer}
        customer={this.state.customer}
      />
    );
  }
}

AddCustomer.propTypes = {
  customer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddCustomer);
