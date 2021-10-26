import { Button, Col, Row, Container, Navbar} from 'react-bootstrap';
import AuthenticationModal from './components/AuthenticationModal';
import React, { useState } from 'react';
import Blog from './pages/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';



export default function App() {
 
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit(e){
    // send to backend??
    // get username from backend
    setUsername("artfullyange")
    console.log(email)
    console.log(password)
    setLoggedIn(true)
  } 

  return (

    <Container>
    

    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
            loggedIn ? <Redirect to={`/${username}`} /> : 
              <Home email={email} setEmail={setEmail} password= {password} setPassword={setPassword} username = {username} setUsername = {setUsername} handleSubmit={handleSubmit}/>
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

function Home({email, setEmail, password, setPassword, handleSubmit}) {
  const [show, setShow] = useState(false);
  

  function handleClose(){
      setShow(false)
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
