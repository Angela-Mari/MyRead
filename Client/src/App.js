import { Container} from 'react-bootstrap';
import { setAlert } from './actions/alert';
import React, { useState } from 'react';
import Blog from './pages/Blog';
import Category from './components/Category';
import MyNav from './components/MyNav';
import Home from './pages/Home';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
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


function App({ 
  login, 
  isAuthenticated, 
  register, 
  loadUser, 
  setAlert,
  auth: { user } 
}) {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alias, setAlias] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authenticationType, setAuthenticationType] = useState("Register");
  const [idNum, setIdNum] = useState(null);
  const [errors, setErrors] = useState(null);

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
      await login(email, password);
      setShow(false)
    } 
    checkSuccess();
    // setTwoFA(true)
  } 

  async function handleGoogleSubmit(g) {
    //setShow(false);
    console.log('inside handleGoogleSubmit');
    console.log("in app: ", g);
    setEmail(g.getEmail());
    setPassword(g.getId());
    if (authenticationType == 'Register') {
      setFirstName(g.getGivenName());
      setLastName(g.getFamilyName());
      setAlias(g.getEmail().split("@")[0].toLowerCase());
      setPhoneNumber("1112223333"); //change later
      setIdNum(g.getId());
    }
     // will change later

    // handleSubmit(g); //need password and phone before signing up. save them and use when using google
    if (authenticationType === "Register"){
      
      await register(g.getGivenName(),
        g.getFamilyName(),
        g.getEmail(),
        g.getEmail().split("@")[0].toLowerCase(),
        g.getId(),
        "1112223333",)
    } else{
      await login(g.getEmail(), g.getId());
    } 
    checkSuccess();
    //setTwoFA(true);
  }

  function checkSuccess() {
    if (isAuthenticated) {
      setShow(false)
      setLoggedIn(true)
    }
  }

  function handle2FASubmit(){
    setLoggedIn(true)
  }

  function handleClick(name){
    setShow(true)
  }

  const location = useLocation();

    return(
    <>      
     {location.pathname !== "/home" && location.pathname !== "/" && <MyNav/>}
     <Alert />
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path = "/privacy-policy"> 
                <Privacy />
            </Route>
            <Route path = "/create-post"> 
                <NewPost />
            </Route>
            {/* 
                Do not use dynamic routes under the root path
                It is suggested that the project routing be modified
                 */}
                <Route exact path="/settings">
                    <Setting />
                </Route>
                  <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              {
                isAuthenticated && user ? <Redirect to={`/blog/${user.alias}`} /> : 
                <Home email={email} setEmail={setEmail} password= {password} setPassword={setPassword} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} handleGoogleSubmit={handleGoogleSubmit} pin = {pin} setPin={setPin} handle2FASubmit = {handle2FASubmit} twoFA={twoFA} setTwoFA={setTwoFA} show={show} setShow={setShow} authenticationType = {authenticationType} setAuthenticationType = {setAuthenticationType}/>
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
