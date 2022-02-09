import React, {useState, useEffect} from "react";
import {Container, Form, Button, Navbar} from "react-bootstrap";
// import CreatableSelect from 'react-select/creatable';
// import getUrl from './GetUrl.js';
import './App.css';

function App() {

  return (
    <Container className="App" >
       
      <Navbar className="App-header"> 
          <img src="./wave.png" />
          <h1>MyRead Curated Blog</h1>
      </Navbar>
      
      <h2>Curate a new post - while you're browsing!</h2>

      <div>
        <form>
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

export default App;
