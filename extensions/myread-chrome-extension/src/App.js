import React, {useState, useEffect} from "react";
import {Container, Form, Button, Navbar} from "react-bootstrap";
import { connect } from 'react-redux';
import { login, register, loadUser } from './actions/auth';
import './App.css';

function App({login, isAuthenticated}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submit = () => {
    console.log("email:" + email)
    console.log("password: " + password)
    login(email, password)
  }


  return (
    <Container className="App" >
       
      <Navbar className="App-header"> 
          <img src="./wave.png" />
          <h1>MyRead Curated Blog</h1>
      </Navbar>
      
      <h2>Curate a new post - while you're browsing!</h2>

      <div>
        <form>

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="email..." onChange={(e) => setEmail(e.value)}/>

          <label for="password">Password</label>
          <input type="password" id="password" name="title" placeholder="Password" onChange={(e) => setPassword(e.value)}/>

          <button onClick={e => submit(e)}>Submit</button>

          { isAuthenticated && 
            (<h3>Logged in</h3>)
          }

          <label for="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter title of article..." />

          <label for="description">Description</label>
          <textarea type="text" id="desc" name="description" placeholder="Enter article description..."></textarea>

          <label for="link">Article URL</label>
          <input type="url" id="link" name="link" placeholder="Enter URL here..."></input>

          <label for="category">Category</label>
            <select id="category" name="category" />
        </form>
      </div>

      <Button className="rounded-pill" type = "primary">Save Post</Button>

    </Container>
  );
}

// export default App

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // auth: state.auth,
});

export default connect(mapStateToProps, {
  login,
})(App);