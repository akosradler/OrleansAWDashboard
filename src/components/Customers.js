import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

class Customers extends React.Component {
  goToAddCustomer = () => {
    browserHistory.push('/addCustomer');
  }

  render() {
    const { customers } = this.props;

    return (
      <div>
        <h1>Customers</h1>
        <input type="submit"
          value="Add customer"
          className="btn btn-primary"
          onClick={this.goToAddCustomer} />
        <button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-refresh"></span> Refresh
        </button>
        <CustomerList customers={customers} />
      </div>
    );
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

mapStateToProps = (state) => {
  return {
    customers: state.customers
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(customerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);