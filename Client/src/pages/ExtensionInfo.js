import { Container, Button, Col, Row} from 'react-bootstrap';
import React from 'react';
import Chrome from './Carousel/chrome.png';
import ExtensionDemo from './Carousel/extension-demo.jpg';

function ExtensionInfo(){
    return(
        <div style={{padding:"2rem"}}>
        <Row style={{width:"100%"}} className='justify-content-center'>
        <Col md={8}>
            <img src={ExtensionDemo} width={"100%"}></img>
        </Col>
        <Col md={4}>
        <h1> <img src={Chrome} alt="chrome logo" height={"50px"} width={"50px"}></img> MyRead browser button for Chrome </h1>
        <p> Load the browser extension in your chrome browser and <b>blog as you surf.</b></p>
        <Button onClick={e=> window.open("https://chrome.google.com/webstore/detail/myread-browser-extension/nlimpfenamaljjgolngpfmdikickookj", "_blank")}>Get the browser button now</Button>
        </Col>
        </Row>
        </div>
    )
}

export default ExtensionInfo