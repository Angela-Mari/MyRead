import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import "./SmallPost.css";
function SmallPost({picture, title, text, link, likes, key, category, comments, id}) {

    function getSource(){
        if (link !== undefined) {
        let arr1 = link.split(":")
        let arr2 = arr1[1].split("/")
        console.log(arr2)
        return arr2[2]
        }
        else {
            return ""
        }
    }

    return (
        // <a className="post-link" href={link} target="_blank">
        <Container>
            <Card border="dark" className="p-2 mb-3 bg-white rounded myshadow">
            <Row>
            <Col className="col-sm-auto">
            <img src={picture !== "" && picture !== undefined? picture: tempPic} width="75" height="75" style={{objectFit:"cover"}}/>
            </Col>
            <Col>
                <Row>
                <Col>
                    <h3 style={{fontSize:"1em"}}>
                        {title}
                    </h3>
                </Col>
                <Col className="col-sm-auto">
                <Badge pill bg="primary" style={{fontSize:".5em"}}>
                    {category}
                </Badge>
                </Col>
                </Row>
                <div>
                    {text.length >= 50? text.substring(0, 25) + "... Read More" : text}
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    Source: {getSource()}
                </div>
                <Row></Row>
            </Col>
            </Row>
            </Card> 
        </Container>
        // </a>
    )
};

export default SmallPost;