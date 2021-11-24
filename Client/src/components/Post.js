import React from 'react';
import { Container, Card, Row, Col, Button} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import "./Post.css"

function Post({title, text, link, likes, comments, id}) {

    //TODO: only delete if you are authenticated
    function handleDelete(e){
        e.preventDefault();
        console.log("delete")
    }

    function handleLike(e){
        e.preventDefault();
        console.log("like")
    }

    function handleComment(e){
        e.preventDefault();
        console.log("comment")
    }
    console.log(title, text, link)
    return (
        
        <a className="post-link" href={link} target="_blank">
        <Container style={{marginTop:"0.5rem"}}>
            <Card syle={{padding:"0.5rem"}}>
            <h3>
                {title}
            </h3>
            <div>
                {text}
            </div> 
            <Row >
                <Col className="align-items-end">
                <Button variant="Link" onClick={e => handleComment(e)}><img src="https://img.icons8.com/ios-filled/50/000000/comments.png" width="30px" height="30px"/></Button>
                    <Button variant="Link" onClick={e => handleLike(e)}><img src="https://img.icons8.com/ios-filled/50/000000/like--v1.png" width="30px" height="30px"/></Button>
                    <Button variant="Link" onClick={e => handleDelete(e)}><img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" width="30px" height="30px"/></Button>
                </Col>
            </Row>
            </Card> 
        </Container>
        </a>
    )
}
export default Post;