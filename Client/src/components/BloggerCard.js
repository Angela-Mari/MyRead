import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import "./BloggerCard.css";
function BloggerCard({picture, name, bio}) {

    return (
        // <a className="post-link" href={link} target="_blank">
        <Container>
            <Card border="dark" className="p-2 mb-3 bg-white rounded myshadow">
            <Row>
            <Col className="col-sm-auto">
            <img src={picture !== "" && picture !== undefined? picture: tempPic} width="75" height="75" style={{objectFit:"cover", borderRadius:"50%"}}/>
            </Col>
            <Col>
                <Row>
                    <h3 style={{fontSize:"1em"}}>
                        {name}
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
        // </a>
    )
};

export default BloggerCard;