import { Container, Form, Button, Row, Col, NavDropdown } from 'react-bootstrap';
import tempPic from "./static_images/anonymous-avatar-icon-25.jpg";
import { deleteComment } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import React, { useState } from 'react';
import "./Comment.css"

function Comment({postId, comment, key, deleteComment, auth: {user}, refreshComments}){
   
    async function handleDelete(){
        console.log("delete: " + comment.text)
        console.log("id: "+ comment._id)
        console.log("postId: " + postId)
        await deleteComment(postId, comment._id).then(e => {
            console.log("refresh from comment")
            refreshComments()
        })
        
    }

    return(
        <Container style={{marginTop:"0.5rem"}}>
        <Row>
        <Col xs={1} className="col-sm-auto">
            <img src={comment.picture !== "" && comment.picture !== undefined? comment.picture: tempPic} width="40" height="40" style={{objectFit:"cover", borderRadius:"50%"}}/>
        </Col>
        <Col xs={10} className="no-gutters">
        <div style={{fontWeight:"bold", color:"#303030"}}> {comment.alias} </div>
        <div> {comment.text} </div>
        </Col>
        <Col xs={1}>
        {
            user.alias === comment.alias?
                <NavDropdown title="..." id="comment-drop-down" style={{fontSize:"1.2rem", fontWeight:"bold", color:"dimgray"}}>
                <NavDropdown.Item onClick={e=>{handleDelete()}}>
                    Delete Comment
                </NavDropdown.Item>
                </NavDropdown>
            :
            <></>
        }
        </Col>
        </Row>
        </Container>
    )
}

Comment.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{ deleteComment })(Comment);