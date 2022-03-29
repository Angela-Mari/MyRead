import { setAlert } from './actions/alert';
import React, { useEffect, useState } from 'react';
import Blog from './pages/Blog';
import Category from './components/Category';
import MyNav from './components/MyNav';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Alert from './components/Alert';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import './App.css';
import { login, register, loadUser } from './actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Privacy from './pages/Privacy';
import Setting from "./pages/Setting.js";
import NewPost from './components/NewPost';
import EditBio from './pages/EditBio';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import ExtensionPopUp from './pages/ExtensionPopUp';
import ExtensionInfo from './pages/ExtensionInfo';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ 
  login, 
  isAuthenticated, 
  register, 
  loadUser, 
  setAlert,
  auth: { user } 
}) {
  useEffect(() => {
    loadUser();
  }, []);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alias, setAlias] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authenticationType, setAuthenticationType] = useState("Register");
  const [idNum, setIdNum] = useState(null);
  const [twoFA, setTwoFA] = useState(false);
  const [pin, setPin] = useState("");

  async function handleSubmit(e){
    if (authenticationType === "Register"){
      await register(
        firstName,
        lastName,
        email,
        alias,
        password,
        phoneNumber,)
    } else{
      await login(email, password); //.then(res => checkSuccess());
    } 
  } 

  async function handleGoogleSubmit(g) {
    console.log('inside handleGoogleSubmit');
    setEmail(g.getEmail());
    setPassword(g.getId());
    if (authenticationType === "Register") {
      setFirstName(g.getGivenName());
      setLastName(g.getFamilyName());
      setAlias(g.getEmail().split("@")[0].toLowerCase());
      setPhoneNumber("1234567890"); //change later
      setIdNum(g.getId());
    }
    if (authenticationType === "Register"){
      await register(g.getGivenName(),
        g.getFamilyName(),
        g.getEmail(),
        g.getEmail().split("@")[0].toLowerCase(),
        g.getId(),
        "1234567890",)
    } else{
      await login(g.getEmail(), g.getId());
    } 
    // checkSuccess();
  }

  function checkSuccess() {
    if (isAuthenticated){
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setAlias("");
      setPhoneNumber("");
      setShow(false)
    }
  }
    
  async function handleFacebookSubmit(fb) {
    console.log('inside handleFacebookSubmit');
    //set email and password
    setEmail(fb.email);
    setPassword(fb.id);
    if (authenticationType === "Register") {
      setFirstName(fb.first_name);
      setLastName(fb.last_name);
      setAlias(fb.email.split("@")[0].toLowerCase());
      setPhoneNumber("1234567890"); //change later
      setIdNum(fb.id);
    }
    if (authenticationType == 'Register') {
      //set firstname, lastname, alias, phoneNumber, idNum
      await register(fb.first_name,
        fb.last_name,
        fb.email,
        fb.email.split("@")[0].toLowerCase(),
        fb.id,
        "1234567890",) 
    } else {
      await login(fb.email, fb.id);
    }
    // checkSuccess();
  }

  function handle2FASubmit(){
  }

  const location = useLocation();

  return(
    <>      
     {location.pathname !== "/home" && location.pathname !== "/" && location.pathname !== "/extension-login" && <MyNav/>}
     <Alert />
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path = "/privacy-policy"> 
                <Privacy />
            </Route>
            <Route path = "/extension-login">
              <ExtensionPopUp />
            </Route>
            <Route path = "/extension-download">
              <ExtensionInfo />
            </Route>
            <Route exact path="/explore">
                    <Explore />
            </Route>
            <Route path = "/create-post"> 
                <NewPost />
            </Route>
            <Route path = "/edit-profile">
              <EditBio/>
            </Route>
              <Route exact path="/settings">
                  <Setting />
              </Route>
                <Redirect exact from="/" to="/home" />
            <Route exact path="/home" >
              {
                isAuthenticated && user ? <Redirect to={`/blog/${user.alias}`} /> : 
                <Home email={email} setEmail={setEmail} password= {password} setPassword={setPassword} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} handleGoogleSubmit={handleGoogleSubmit} pin = {pin} setPin={setPin} handle2FASubmit = {handle2FASubmit} twoFA={twoFA} setTwoFA={setTwoFA} show={show} setShow={setShow} authenticationType = {authenticationType} setAuthenticationType = {setAuthenticationType} handleFacebookSubmit={handleFacebookSubmit}/>
              }
              </Route>
              <Route exact path ="/blog/:username">
                <Blog /> {/* TODO: fix routing when unauthenticated  */}
              </Route>
              <Route path ="/blog/:username/category/:category">
                <Category />
              </Route>    
          </Switch>
    </>  
  );
}

App.propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, {
    login,
    register,
    loadUser,
    setAlert,
})(App);
