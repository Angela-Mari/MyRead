import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import tempPic from "./static_images/anonymous-avatar-icon-25.jpg";

import React, { useState } from 'react';

function Comment({comment, key}){
   
    return(
        <Container >
        <Row>
        <Col xs={3}>
            <img src={comment.picture !== "" && comment.picture !== undefined? comment.picture: tempPic} width="25" height="25" style={{objectFit:"cover", borderRadius:"50%"}}/>
        </Col>
        <Col xs={9}>
        <div> {comment.alias} </div>
        </Col>
        
        </Row>
        <div> {comment.text} </div>
        </Container>
    )
}

export default Comment