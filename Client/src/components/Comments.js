import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { addComment } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { getPost } from '../actions/post';

function Comments({addComment, post, getPost }){
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setComments(post.comments)
        setShow(true)
      }, []);
    
    async function handleSubmit(e){
        e.preventDefault()
        await addComment(post._id, {text: comment })
        await getPost(post._id).then(res => {
            setComments(res.data.comments)  
        })
        
    }

    return(
        <Container >
        <h2> Comments </h2>
        <Row>
            {
                
                show && comments.length === 0?
                <p>There are zero comments on this post, write your own below.</p>
                :
                show ? 
                comments.map((comment, idx) => (
                            <Comment comment= {comment} key={idx} />
                    ))
                :
                <p>Having issues loading comments.</p>
            }
        </Row>
        <Row>
        <Form onSubmit={e => handleSubmit(e)}>
            <Row>
                <Col className="g-0" xs={10} style={{paddingRight:"0rem", paddingLeft:"0.5rem"}}>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Control value={comment} onChange={(e) => setComment(e.currentTarget.value)} isInvalid={ !!errors.firstName }/>
                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col className="g-0" xs={2} style={{paddingRight:"0.5rem"}}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>      
        </Form>
        </Row>
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