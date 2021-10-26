import { Button, Col, Row, Container, Navbar} from 'react-bootstrap';
import AuthenticationModal from './components/AuthenticationModal';
import React, { useState } from 'react';
import Blog from './pages/Blog';
import TwoFAModal from './components/TwoFAModal';

function Home({email, setEmail, password, setPassword, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, handleSubmit, pin, setPin, handle2FASubmit, twoFA, setTwoFA, show, setShow}) {
  
    console.log("home:", twoFA)
    
  
    function handleClose(){
        setShow(false)
        setTwoFA(false)
    }
  
    
  
    function handleClick(name){
        console.log(name)
        setAuthentication(name)
        setShow(true)
    }
  
    const [authentication, setAuthentication] = useState("Register");
  
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
          <AuthenticationModal email={email} setEmail={setEmail} password={password} setPassword={setPassword} show={show} handleClose={handleClose} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} type={authentication}></AuthenticationModal>
          <TwoFAModal pin={pin} setPin={setPin} handleTwoFA={handle2FASubmit} show={twoFA} handleClose={handleClose}></TwoFAModal>
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

export default Home;