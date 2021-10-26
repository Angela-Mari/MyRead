import { Container} from 'react-bootstrap';
import React, { useState } from 'react';
import Blog from './pages/Blog';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import { login, register, loadUser } from './actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function App({ 
  login, 
  isAuthenticated, 
  register, 
  loadUser, 
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

  const [twoFA, setTwoFA] = useState(false);
  const [pin, setPin] = useState("");

  async function handleSubmit(e){
    // send to backend??
    // get username from backend
    setShow(false)
    console.log(firstName)
    console.log(lastName)
    console.log(alias)
    console.log(phoneNumber)
    console.log(email)
    console.log(password)
    await login(email, password);
    setTwoFA(true)
  } 

  function handle2FASubmit(){
    setLoggedIn(true)
  }

  function handleClick(name){
    console.log(name)
    setShow(true)
  }

    return(
    <Container>
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              {
              isAuthenticated ? <Redirect to={`/${user.alias}`} /> : 
                <Home email={email} setEmail={setEmail} password= {password} setPassword={setPassword} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} pin = {pin} setPin={setPin} handle2FASubmit = {handle2FASubmit} twoFA={twoFA} setTwoFA={setTwoFA} show={show} setShow={setShow}/>
              }
              </Route>
              <Route exact path ="/:username">
                <Blog />
              </Route>
          </Switch>
      </Router>
    </Container>
  );
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  login,
  register,
  loadUser
})(App);
