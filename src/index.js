import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createRoutes } from './routes';
import createConfiguredStore from './store/createConfiguredStore';
import { loadCustomers } from './actions/customerActions'
import history from './services/history';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.css'

const routes = createRoutes(history);
const store = createConfiguredStore();

ReactDOM.render(
  <Provider store={store}>    
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
