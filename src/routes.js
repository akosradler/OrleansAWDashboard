import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Callback from './services/Callback';
import Auth from './services/Auth';
import Customers from './components/Customers'
import AddCustomer from './components/AddCustomer';

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const createRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
      <Route exact path="/customers" render={(props) => <Customers auth={auth} {...props} />} />
      <Route exact path="/customers/add" render={(props) => <AddCustomer auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </Switch>
  );
}



