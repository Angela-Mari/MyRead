import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '771291261258-vpd233ok80266o2ndtjllv5q482h12c2.apps.googleusercontent.com';

var btnTxt = ""


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
      // isRegister: false,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);

  }

  login (googleUser) {

    console.log('Signing In Via GOOGLE');
    if(googleUser.accessToken){
      var profile = googleUser.getBasicProfile();
      this.isLogined = true;
      this.accessToken = googleUser.accessToken;
    }
    else {
      this.isLogined = false;
      this.accessToken = '';
    }

    this.props.handleGoogleSubmit(profile);
  }

  logout (googleUser) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    console.log('User signed out.');
  }

  handleLoginFailure (googleUser) {
    alert('Failed to log in with Google')
  }

  handleLogoutFailure (googleUser) {
    alert('Failed to log out with Google')
  }

  // googleBtnText(type) {
  //   if (type == 'Register') {
  //       this.isRegister = true;
  //   } else {
  //       this.isRegister = false;
  //   }
  // }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          handleClick={ this.logout }
          clientId={ CLIENT_ID }
          buttonText='Log Out'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          handleClick={ this.login }
          clientId={ CLIENT_ID }
          buttonText= {'Authenticate with Google'}
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