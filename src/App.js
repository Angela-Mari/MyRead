import { Button, Col, Row, Container, Navbar} from 'react-bootstrap';
import AuthenticationModal from './AuthenticationModal';
import React, { useState } from 'react';
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState("Register");

  function handleClose(){
    setShow(false)
  }

  async function handleSubmit(e){
    // send to backend??
    console.log(email)
    console.log(password)
    await login(email, password);
  }

  // function handleSubmit(e){
  //   login(email, password);
  //   // send to backend??
  //   console.log(email)
  //   console.log(password)
  // }

  function handleClick(name){
    console.log(name)
    setAuthentication(name)
    setShow(true)
  }
  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <h1>
            Welcome to MyRead
          </h1>
          <p>
            Register or log in to get started.
          </p>
          <Button 
            variant="primary"
            name="Register"
            onClick={(e) => handleClick(e.currentTarget.name)}>
            Register
          </Button>{' '}
          <Button variant="primary"
            name="Log in"
            onClick={(e) => handleClick(e.currentTarget.name)}>
            Log in
          </Button>
          <AuthenticationModal email={email} setEmail={setEmail} password={password} setPassword={setPassword} show={show} handleClose={handleClose} handleSubmit={handleSubmit} type={authentication}></AuthenticationModal>
          {isAuthenticated && user &&
            <div>
              <h1>Welcome, {user.firstName} {user.lastName}</h1>
              <h2>Email: {user.email}</h2>
              <h2>Alias: {user.alias}</h2>
              <h2>Phone Number: {user.phoneNumber}</h2>
            </div>
          }
        </Col>
        <Navbar fixed="bottom" >
        <Container>
          Your own blog in seconds.
        </Container>
      </Navbar>
      </Row> 
    </Container>
  )
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