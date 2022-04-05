import { func } from 'prop-types';
import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import "./SmallPost.css";
import { useHistory } from "react-router-dom";

function SmallPost({ key, post}) {

    let history = useHistory();
    
    function getSource(){
        if (post && post.url != undefined && post.url != null) {
        let arr1 = post.url.split(":")
            if(arr1.length >= 2){
                let arr2 = arr1[1].split("/")
                return arr2[2]
            }
            else return post.url
        }
        else {
            return ""
        }
    }

    function handleClick(post) {
        history.push(`/blog/${post.alias}/post/${post._id}`) 
    }    

    return (
        // <a className="post-link" href={link} target="_blank">
        <Container onClick={e=> handleClick(post)}>
            <Card className="p-2 mb-3 bg-white rounded myshadow" style={{height:"9rem"}}>
            <Row>
            <Col className="col-sm-auto">
            <img src={post.picture !== "" && post.picture !== undefined? post.picture: tempPic} width="100" height="125" style={{objectFit:"cover"}}/>
            </Col>
            <Col style={{marginLeft:"-1rem"}}>
                <Row>
                <Col>
                    <h3 style={{fontSize:"1em"}}>
                        {post.title.length >= 32? post.title.substring(0, 32).trim() + "..." : post.title}
                    </h3>
                </Col>
                
                </Row>
                <div>
                    {post.description.length >= 50? post.description.substring(0, 50).trim() + "... Read More" : post.description}
                </div>
                <Row>
                <div style={{marginTop:"0.15rem"}}>
                    Source: {getSource()}
                </div>
                </Row>
                <Row className="justify-content-end">
                <Col  xs={1} >
                    <img src={post.userPicture} height="25px" width="25px" style={{objectFit:"cover", borderRadius:"50%"}}/>
                    </Col>
                    <Col  xs={11} >{post.alias}</Col> 
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