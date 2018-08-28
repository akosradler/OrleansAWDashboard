import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../services/history';
import CustomerList from './CustomerList'
import * as customerActions from '../actions/customerActions';

class Customers extends React.Component {
  componentDidMount() {
    this.refresh();
  }

  goToAddCustomer = () => {
    history.push('/customers/add');
  }

  refresh = () => {
    this.props.actions.loadCustomers()
  }

  render() {
    const { customers } = this.props;
    return (
      <div>
        <h1>Customers</h1>
        <CustomerList customers={customers} />
        <br/>
        <input type="submit"
          value="Add customer"
          className="btn btn-primary"
          onClick={this.goToAddCustomer} />
        <button className="btn btn-md fa fa-refresh float-right" onClick={this.refresh}/>
      </div>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    customers: state.customers
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);