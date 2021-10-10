import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationModal from './_authenticationModal';
import React, { useState } from 'react';

export default function Home() {

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
    <div className={styles.container}>
      <Head>
        <title>MyRead Welcome Page</title>
        <meta name="description" content="Landing page for unauthenticated users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Row>
      <Col className="text-center">
        <h1 className={styles.title}>
          Welcome to MyRead
        </h1>

        <p className={styles.description}>
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
        </Row> 
      </main>

      <footer className={styles.footer}>
        Your own blog in seconds.
      </footer>
    </div>
  )
}
