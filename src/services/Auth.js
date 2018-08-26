import auth0 from 'auth0-js'
import {AUTH_CONFIG} from './auth0.config.js'
import history from './history';

export default class Auth {
    auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: 'http://localhost:3000/callback',
      audience: AUTH_CONFIG.audience,
      responseType: 'token id_token',
      scope: 'openid'
    });

    handleAuthentication = () => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          history.replace('/chat');
        } else if (err) {
          history.replace('/chat');
          console.log(err);
        }
      });
    }
  
    login = () => {
      this.auth0.authorize();
    }

    setSession = (authResult) => {
      // Set the time that the Access Token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      history.replace('/chat');
    }
  
    logout = () => {
      // Clear Access Token and ID Token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      history.replace('/chat');
    }
  
    isAuthenticated = () => {
      // Check whether the current time is past the 
      // Access Token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }