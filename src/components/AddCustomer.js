import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import history from '../services/history'
import * as customerActions from '../actions/customerActions'
import CustomerForm from './CustomerForm';
import validator from 'validator';
import toastr from 'toastr';

class AddCustomer extends React.Component {
  state = {
    customer: Object.assign({})
  }

  isValidInput = () => {
    let isValid = true;

    if (this.state.customer.FirstName.trim().length < 0) {
      toastr.error('First Name must be entered');
      isValid = false;
    }
    if (this.state.customer.LastName.trim().length < 0) {
      toastr.error('Last Name must be entered');
      isValid = false;
    }
    if (!validator.isEmail(this.state.customer.EmailAddress)) {
      toastr.error('Valid email address must be entered');
      isValid = false;
    }
    if (!validator.isMobilePhone(this.state.customer.Phone)) {
      toastr.error('Valid phone number must be entered');
      isValid = false;
    }
    return isValid;
  }

  updateCustomer = (event) => {
    let customer = Object.assign({}, this.state.customer);
    customer[event.target.name] = event.target.value;
    return this.setState({customer: customer});
  }

  addNewCustomer = (event) => {
    event.preventDefault();

    if (!this.isValidInput()) {
      return;
    }

    this.props.actions.addCustomer(this.state.customer)
      .then(() => {
        history.push('/customers');
      });
  }

  render() {
    return (
      <CustomerForm
        onSubmit={this.addNewCustomer}
        onChange={this.updateCustomer}
      />
    );
  }
}

AddCustomer.propTypes = {
  customer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
