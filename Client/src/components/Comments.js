import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { addComment } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { getPost } from '../actions/post';
import "./Comments.css";

function Comments({addComment, post, getPost }){
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    async function refreshComments(){
        await getPost(post._id).then(res => {
            console.log("setting comments...")
            console.log(res.data.comments)
            setComments([...res.data.comments])})
        console.log("updated comments")
    }

    useEffect(() => {
        console.log("use effect comments")
        setComments(post.comments)
        setShow(true)
      }, []);
    
    async function handleSubmit(e){
        e.preventDefault()
        await addComment(post._id, {text: comment }).then(e=>{
            refreshComments()
        })
        
    }

    return(
        <Container >
        <Col className="g-0" style={{background:"whitesmoke", borderRadius:"1%", padding:"1rem 1rem 0rem 1rem", border: "1px solid lightgrey", marginTop:"1rem"}}>
        <h2 style={{marginTop:"0", color:"dimgray", fontSize:"1.3rem", fontWeight:"bold"}}> Comments </h2>
        <div class="masked-overflow" style={{paddingTop:"1rem", marginTop:"-0.5rem", height:"150px", overflowX:"hidden", overflowY:"auto"}}>
            {
                
                show && comments.length === 0?
                <p>There are zero comments on this post, write your own below.</p>
                :
                show ? 
                comments.map((mycomment, idx) => (
                            <Comment postId= {post._id} comment= {mycomment} key={mycomment._id} refreshComments={refreshComments}/>
                    ))
                :
                <p>Having issues loading comments.</p>
            }
        </div>
        <Form onSubmit={e => handleSubmit(e)}>
            <Row className="no-gutters" style={{marginTop:"0.5rem"}}>
                <Col xs={10} >
                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Control className="my-text" value={comment} placeHolder = "Write a comment..." onChange={(e) => setComment(e.currentTarget.value)} isInvalid={ !!errors.firstName }/>
                        <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
                    </Form.Group>
                    
                </Col>
                <Col className="g-0" xs={2} >
                    <Button className="rounded-pill" variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>      
        </Form>
        </Col>
        </Container>
    )
}

Comments.propTypes = {
    addComment: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{ addComment, getPost })(Comments);