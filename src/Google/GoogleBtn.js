import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
//import App from '../App';

const CLIENT_ID = '771291261258-vpd233ok80266o2ndtjllv5q482h12c2.apps.googleusercontent.com';

var GOOGLE_EMAIL = '';
var GOOGLE_FIRST_NAME = '';
var GOOGLE_LAST_NAME = '';
var GOOGLE_ALIAS = '';

class GoogleBtn extends Component {


   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      fname: '',
      lname: '',
      gmail: '',
      alias: '',
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (googleUser) {

    var profile = googleUser.getBasicProfile();
    if(googleUser.accessToken){
      //maybe put profile here. not now, so i can log easier
        this.setState(state => ({
        isLogined: true,
        accessToken: googleUser.accessToken,
        
        // fname: profile.getGivenName(),
        // lname: profile.getFamilyName(),
        // gmail: profile.getEmail(),
        // alias: GOOGLE_ALIAS
        }));
        this.props.handleGoogleSubmit(profile);
    
    }

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    GOOGLE_FIRST_NAME = profile.getGivenName();
    console.log('First Name: ' + GOOGLE_FIRST_NAME);
    GOOGLE_LAST_NAME = profile.getFamilyName();
    console.log('Last Name: ' + GOOGLE_LAST_NAME);
    console.log('Image URL: ' + profile.getImageUrl());
    GOOGLE_EMAIL = profile.getEmail();
    console.log('Email: ' + GOOGLE_EMAIL); // This is null if the 'email' scope is not present.
    GOOGLE_ALIAS = GOOGLE_EMAIL.split("@")[0];
    GOOGLE_ALIAS = GOOGLE_ALIAS.toLowerCase();
    console.log('Alias: ' + GOOGLE_ALIAS);
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

  //may need to add a lifecycle hook

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
          handleClick={ this.handleClick }
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