import { Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import GoogleBtn from '../external-logins/GoogleBtn';
import FacebookLogin from 'react-facebook-login';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./ExtensionPopUp.css";

function ExtensionPopUp({login, handleGoogleSubmit, handleFacebookSubmit,}){

    const responseFacebook = (response) => {
        console.log(response);
        // Login failed
        if (response.status === "unknown") {
          alert("Facebook authentication failed!");
        //   setLogin(false);
          return false;
        }
        
        console.log('FACEBOOK login successful: ', response)
        handleFacebookSubmit(response); //this is the problem child rn
      };


    return(
        <div style ={{background:"whiteSmoke", height:"100vh"}}>
            <Container>
            <Row className="align-items-center text-center justify-content-center" style={{paddingTop:"5rem"}}>
               
            <h1 style={{paddingBottom:"1rem"}}>MyRead</h1>
            <p>Click below to log into MyRead via facebook or google</p>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                <FacebookLogin
                appId="324834482819869"
                autoLoad={false}
                fields="first_name,last_name,email,picture,id"
                scope="public_profile,email"
                callback={responseFacebook}
                icon="fa-facebook"
                textButton="Authenticate with Facebook"
                size="small"
                cssClass="btnFacebook"
                />
                </Col>
                <Col className="col-sm-auto">
                <GoogleBtn 
                handleGoogleSubmit={handleGoogleSubmit} 
                /> 
                </Col>
                </Row>
                </Row>
                </Container>
        </div>
    )
}

ExtensionPopUp.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, {
    login
})(ExtensionPopUp);
