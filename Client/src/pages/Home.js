import { Button, Col, Row, Container, Navbar, Carousel, Card} from 'react-bootstrap';
import AuthenticationModal from '../components/AuthenticationModal';
import React from 'react';
import TwoFAModal from '../components/TwoFAModal';
import pic1 from "./Carousel/pexels-jess-loiterton-4319752.jpg";
import pic2 from "./Carousel/pexels-jess-loiterton-4784090.jpg";
import pic3 from "./Carousel/pexels-jess-loiterton-4784148.jpg";
import browsing from "./Carousel/browsing.png";
import blogging from "./Carousel/writing.png";
import wave from "./Carousel/wave.png";
import "./Home.css"
import Explore from './Explore';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import PaypalImage from "./Carousel/paypal.png";


// Photo by Jess Loiterton from Pexels
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//https://www.flaticon.com/free-icon/blogging_6232256?term=content&page=1&position=82&page=1&position=82&related_id=6232256&origin=search
function Home({authenticationType, setAuthenticationType, email, setEmail, password, setPassword, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, handleSubmit, handleGoogleSubmit, handleFacebookSubmit, pin, setPin, handle2FASubmit, twoFA, setTwoFA, show, setShow}) {    
  
    function handleClose(){
        setShow(false)
        setTwoFA(false)
    }
  
    function handleClick(name){
        setAuthenticationType(name)
        setShow(true)
    }
  
    return (
      <Container fluid={true} style={{padding:"0", margin:"0", overflow:"-moz-hidden-unscrollable", overflow:"hidden"}}>
            <Row className="reg-cont justify-content-end" style={{marginTop:"0.5rem",marginRight:"0.5rem"}}>
                <Col className="text-end" style={{marginTop:"0.50em"}}>
                    Your own blog in seconds.
                </Col>
                <Button className="rounded-pill" style={{width:"40px", backgroundColor:"#f4ca43", color:"#242b9b"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                </Button>
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
        <Container style={{marginTop:"40px", marginRight:"0", marginLeft:"0", padding:"0", overflow:"-moz-hidden-unscrollable", overflow:"hidden"}} fluid={true}>
        {/* Title */}
        <Row className="float">
            <h1>
                MyRead
            </h1>
            <h2 style={{marginTop:"-75px"}}>
                blog as you surf
            </h2>
        </Row>

        {/* Background images */}
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

           {/* Pitch Cards */}
            <Row className ="pitch justify-content-around" style={{marginLeft:"0.15rem"}}>
            <Col xs={12} sm={3} lg={3} className="gx-1">
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={200}
                >
                <Card className="text-center align-self-end" style={{cursor:"pointer"}}>
                <Card.Body>
                <Card.Title >
                    <img
                    src={browsing}
                    alt="Browse the Best"
                    />
                    </Card.Title>
                    <Card.Title >Browse the Best</Card.Title>
                    <Card.Text>
                    Instead of searching yourself, access the best content on the web curated by passionate people like you
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            
            <Col xs={12} sm={3} lg={3} className="gx-1">
                <Card className="text-center" onClick={e=> {handleClick("Register")}} style={{cursor:"pointer"}}>
                <Card.Body>
                    <Card.Title >
                    <img
                    src={blogging}
                    alt="Become a Curator"
                    />
                    </Card.Title>
                    <Card.Title >Become a Curator</Card.Title>
                    <Card.Text>
                    Eliminate the tedious process of blogging by curating content you find from the web
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            
            <Col xs={12} sm={3} lg={3} className="gx-1">
                <RouterLink to="/extension-download" style={{textDecoration:"none", color:"black"}}>
                <Card className="text-center" style={{cursor:"pointer"}}>
                <Card.Body>
                    <Card.Title>                    
                    <img
                    src={wave}
                    alt="Blog While You Surf"
                    />
                    </Card.Title>
                    <Card.Title >Blog as you Surf</Card.Title>
                    <Card.Text>
                    Save and tag content as you surf with our browser extension for a seamless experience
                    </Card.Text>
                </Card.Body>
                </Card>
                </RouterLink>
            </Col>
            </Row>
            {/* Explore Page */}
            <Row style ={{marginTop:"17rem"}}>
            
            <Col>
                <h2 id="section1" style = {{color:"DimGrey", marginLeft:"3rem", marginBottom:"0rem"}}>
                    Browse the Best
                </h2>
                <Col style={{padding:"1.5rem"}}>
                
                <Explore/> 
                </Col>
            </Col>
            </Row>
            <Row>
            </Row>
        </Container>
        {/* Log in Modal */}
        <Row className="justify-content-md-center">
            <Col className="text-center">
            <AuthenticationModal email={email} setEmail={setEmail} password={password} setPassword={setPassword} show={show} handleClose={handleClose} firstName= {firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} alias={alias} setAlias={setAlias} phoneNumber={phoneNumber} setPhoneNumber = {setPhoneNumber} handleSubmit={handleSubmit} handleGoogleSubmit={handleGoogleSubmit} handleFacebookSubmit={handleFacebookSubmit} type={authenticationType}></AuthenticationModal>
            <TwoFAModal pin={pin} setPin={setPin} handleTwoFA={handle2FASubmit} show={twoFA} handleClose={handleClose}></TwoFAModal>
            </Col>
            <Navbar fixed="bottom">
            </Navbar>
        </Row> 
      </Container>
  )
  }

export default Home;