import { Button, Col, Row, Container, Navbar, Carousel, Card} from 'react-bootstrap';
import AuthenticationModal from '../components/AuthenticationModal';
import React, { useState } from 'react';
import Blog from './Blog';
import TwoFAModal from '../components/TwoFAModal';
import pic1 from "./Carousel/pexels-jess-loiterton-4319752.jpg";
import pic2 from "./Carousel/pexels-jess-loiterton-4784090.jpg";
import pic3 from "./Carousel/pexels-jess-loiterton-4784148.jpg";
import browsing from "./Carousel/browsing.png";
import blogging from "./Carousel/writing.png";
import wave from "./Carousel/wave.png";
import "./Home.css"


// Photo by Jess Loiterton from Pexels
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//https://www.flaticon.com/free-icon/blogging_6232256?term=content&page=1&position=82&page=1&position=82&related_id=6232256&origin=search
function Home({authenticationType, setAuthenticationType, email, setEmail, password, setPassword, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, handleSubmit, handleGoogleSubmit, pin, setPin, handle2FASubmit, twoFA, setTwoFA, show, setShow}) {    
  
    function handleClose(){
        setShow(false)
        setTwoFA(false)
    }
  
    function handleClick(name){
        setAuthenticationType(name)
        setShow(true)
    }
  
    return (
      <Container fluid={true} style={{padding:"0", margin:"0", overflow:"hidden"}}>
            <Row className="reg-cont justify-content-end" style={{marginTop:"0.5rem",marginRight:"0.5rem"}}>
                <Col className="text-end" style={{marginTop:"0.50em"}}>
                    Your own blog in seconds.
                </Col>
                <Button 
                    style={{width:"fit-content", marginRight:"0.5rem"}}
                    className="rounded-pill"
                    variant="primary"
                    name="Register"
                    onClick={(e) => handleClick(e.currentTarget.name)}>
                    Register
                </Button>
                {' '}
                <Button 
                    style={{width:"fit-content", marginRight:"0.5rem"}}
                    className="rounded-pill"
                    variant="secondary"
                    name="Log in"
                    onClick={(e) => handleClick(e.currentTarget.name)}>
                    Log in
                </Button>
            </Row>
        <Container style={{marginTop:"40px", marginRight:"0", marginLeft:"0", padding:"0"}} fluid={true}>
        <Row className="float">
            <h1>
                MyRead
            </h1>
            <h2>
                blog as you surf
            </h2>
        </Row>
        <Carousel controls={false} fade={true} indicators={false}>
            <Carousel.Item>
                <img
                className="crop"
                src={pic1}
                alt="Blog While You Surf"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="crop"
                src={pic2}
                alt="Blog While You Surf"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="crop"
                src={pic3}
                alt="Blog While You Surf"
                />

                
            </Carousel.Item>
            </Carousel>
            <Row className ="pitch">
            
            <Col>
                <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                <Card.Title >
                    <img
                    src={browsing}
                    alt="Browse the Best"
                    />
                    </Card.Title>
                    <Card.Title >Browse the Best</Card.Title>
                    <Card.Text>
                    Access the best content on the web curated by people like you.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title >
                    <img
                    src={blogging}
                    alt="Become a Curator"
                    />
                    </Card.Title>
                    <Card.Title >Become a Curator</Card.Title>
                    <Card.Text>
                    Eliminate the tedious process of blogging by curating content from the web on your MyRead blog.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>                    
                    <img
                    src={wave}
                    alt="Blog While You Surf"
                    />
                    </Card.Title>
                    <Card.Title >Blog as you Surf</Card.Title>
                    <Card.Text>
                    Save and tag content as you surf with our browser extension for a seamless experience. 
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        <Row className="justify-content-md-center">
            <Col className="text-center">
            <AuthenticationModal email={email} setEmail={setEmail} password={password} setPassword={setPassword} show={show} handleClose={handleClose} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} handleGoogleSubmit={handleGoogleSubmit} type={authenticationType}></AuthenticationModal>
            <TwoFAModal pin={pin} setPin={setPin} handleTwoFA={handle2FASubmit} show={twoFA} handleClose={handleClose}></TwoFAModal>
            </Col>
            <Navbar fixed="bottom">
            </Navbar>
        </Row> 
      </Container>
  )
  }

export default Home;