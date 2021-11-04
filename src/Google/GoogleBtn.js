import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
//import App from '../App';

const CLIENT_ID = '771291261258-vpd233ok80266o2ndtjllv5q482h12c2.apps.googleusercontent.com';

class GoogleBtn extends Component {

   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (googleUser) {
    if(googleUser.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: googleUser.accessToken
      }));
    }
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('First Name: ' + profile.getGivenName());
    console.log('Last Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Token: ' + googleUser.accessToken);
  }

  logout (googleUser) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    console.log('User signed out.');
  }

  handleLoginFailure (googleUser) {
    alert('Failed to log in')
  }

  handleLogoutFailure (googleUser) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Log Out'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Sign in with Google'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          />
      }
    </div>
    
    )
  }
}

export default GoogleBtn;