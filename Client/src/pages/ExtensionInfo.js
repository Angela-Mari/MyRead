import { Container, Button, Col, Row} from 'react-bootstrap';
import React from 'react';
import Chrome from './Carousel/chrome.png';
import ExtensionDemo from './Carousel/extension-demo.jpg';

function ExtensionInfo(){
    return(
        <Container style={{paddingTop:"2rem"}}>
            <Row>
        <Col md={8}>
            <img src={ExtensionDemo} width={"100%"}></img>
        </Col>
        <Col md={4}>
        <h1> <img src={Chrome} alt="chrome logo" height={"50px"} width={"50px"}></img> MyRead browser button for Chrome </h1>
        <p> Load the browser extension in your preferred browser and <b>blog as you surf.</b></p>
        <Button disabled>Get the browser button now</Button>
        </Col>
        </Row>
        </Container>
    )
}

export default ExtensionInfo