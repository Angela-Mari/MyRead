import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import "./SmallPost.css";
function SmallPost({picture, title, text, link, likes, key, category, comments, id, alias, userPicture}) {

    function getSource(){
        if (link !== undefined) {
        let arr1 = link.split(":")
        let arr2 = arr1[1].split("/")
        return arr2[2]
        }
        else {
            return ""
        }
    }

    return (
        // <a className="post-link" href={link} target="_blank">
        <Container>
            <Card className="p-2 mb-3 bg-white rounded myshadow" style={{height:"9rem"}}>
            <Row>
            <Col className="col-sm-auto">
            <img src={picture !== "" && picture !== undefined? picture: tempPic} width="100" height="125" style={{objectFit:"cover"}}/>
            </Col>
            <Col style={{marginLeft:"-1rem"}}>
                <Row>
                <Col>
                    <h3 style={{fontSize:"1em"}}>
                        {title.length >= 32? text.substring(0, 32).trim() + "..." : title}
                    </h3>
                </Col>
                
                </Row>
                <div>
                    {text.length >= 50? text.substring(0, 50).trim() + "... Read More" : text}
                </div>
                <Row>
                <div style={{marginTop:"0.15rem"}}>
                    Source: {getSource()}
                </div>
                </Row>
                <Row className="justify-content-end">
                <Col  xs={1} >
                    <img src={userPicture} height="25px" width="25px" style={{objectFit:"cover", borderRadius:"50%"}}/>
                    </Col>
                    <Col  xs={11} >{alias}</Col> 
                </Row>
                <Row style={{marginTop:"0.5rem",marginLeft:"0rem"}}>
                
                </Row>
            </Col>
            </Row>
            </Card> 
        </Container>
        // </a>
    )
};

export default SmallPost;