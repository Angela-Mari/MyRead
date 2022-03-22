import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import tempPic from "./static_images/anonymous-avatar-icon-25.jpg";

import React, { useState } from 'react';

function Comment({comment, key}){
   
    return(
        <Container style={{marginTop:"0.5rem"}}>
        <Row>
        <Col xs={1}>
            <img src={comment.picture !== "" && comment.picture !== undefined? comment.picture: tempPic} width="35" height="35" style={{objectFit:"cover", borderRadius:"50%"}}/>
        
        </Col>
        <Col xs={11}>
        <div> {comment.alias} </div>
        <div> {comment.text} </div>
        </Col>
        </Row>
        </Container>
    )
}

export default Comment