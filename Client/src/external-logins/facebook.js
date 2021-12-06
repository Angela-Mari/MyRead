import React, { Component, useState } from "react";
import FacebookLogin from "react-facebook-login";
import "../App.css";
// import App from "../App.js";

const APP_ID = '324834482819869';



class FacebookBtn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      data: {},
      picture: "",
    };
    // this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    // this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  responseFacebook(response) {
    console.log("responseFacebook", response);
    // Login failed
    if (response.status === "unknown") {
      alert("Facebook authentication failed!");
      // setLogin(false);
      return false;
    }
    
    this.data = response;
    this.picture = response.picture.data.url;
    if (response.accessToken) {
      this.login = true;
    } else {
      this.login = false;
    }
    console.log('FACEBOOK login successful: ', response)
    // App.handleFacebookSubmit(response); //this is the problem child rn
  }

  handleLoginFailure (googleUser) {
    alert('Failed to log in with Facebook')
  }

  handleLogoutFailure (googleUser) {
    alert('Failed to log out with Facebook')
  }

  render() {
    return (
      <div className="container">
        {!this.login && (
          <FacebookLogin
            appId="324834482819869"
            autoLoad={false}
            fields="first_name,last_name,email,picture"
            scope="public_profile,email,user_friends"
            callback={this.responseFacebook()}
            icon="fa-facebook"
            textButton="Authenticate with Facebook"
          />
        )}
  
        {/* {login && (
          <div className="card">
            <div className="card-body">
              <img className="rounded" src={picture} alt="Profile" />
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">Email ID: {data.email}</p>
              <a href="#" className="btn btn-danger btn-sm" onClick={this.logout()}>
                Logout
              </a>
            </div>
          </div>
        )} */}
      </div>
    )
  }
}

export default FacebookBtn;