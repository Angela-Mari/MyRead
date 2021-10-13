import { Button, Col, Row, Container, Navbar} from 'react-bootstrap';
import AuthenticationModal from './AuthenticationModal';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authentication, setAuthentication] = useState("Register");

  function handleClose(){
    setShow(false)
  }

  function handleSubmit(e){
    // send to backend??
    console.log(email)
    console.log(password)
  }

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
export default App;
