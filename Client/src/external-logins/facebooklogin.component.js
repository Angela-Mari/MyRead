import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "../App.css";
// import App from "../App.js";

function FacebookLoginComponent() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");


  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Facebook authentication failed!");
      setLogin(false);
      return false;
    }
    
    // setData(response);
    // setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    console.log('FACEBOOK login successful: ', response)
    // App.handleFacebookSubmit(response); //this is the problem child rn
  };
  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };

  return (
    <div className="container">
      {!login && (
        <FacebookLogin
          appId="324834482819869"
          autoLoad={false}
          fields="first_name,last_name,email,picture,id"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
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
            <a href="#" className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default FacebookLoginComponent;