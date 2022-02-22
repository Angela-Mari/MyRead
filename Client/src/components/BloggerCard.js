import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import { AlphaSenderInstance } from 'twilio/lib/rest/messaging/v1/service/alphaSender';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import "./BloggerCard.css";
import {Link} from "react-router-dom";
function BloggerCard({picture, name, bio, alias, key}) {

    return (
        
        <Link to={`/blog/${alias}`} style={{ textDecoration: "none", color: "black"}}>
        <Container key = {key}>
            <Card border="dark" className="p-2 mb-3 bg-white rounded myshadow" >
            <Row>
            <Col className="col-sm-auto">
            <img src={picture !== "" && picture !== undefined? picture: tempPic} width="75" height="75" style={{objectFit:"cover", borderRadius:"50%"}}/>
            </Col>
            <Col>
                <Row>
                    <h3 style={{fontSize:"1em"}}>
                        {name}'s Blog
                    </h3>
                </Row>
                <Row>
                    <h3 style={{fontSize:"1em"}}>
                        <b>{alias}</b>
                    </h3>
                </Row>
                <div>
                    {bio != undefined && bio.length >= 50? bio.substring(0, 25) + "... Read More" : bio}
                </div>
                <Row></Row>
            </Col>
            </Row>
            </Card> 
        </Container>
        </Link>
    )
};

export default BloggerCard;