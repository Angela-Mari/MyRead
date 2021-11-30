import React from 'react';
import { Container, Card, Row, Col, Button} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import "./Post.css"
import { deletePost } from "../actions/post"
import { addLike } from "../actions/post"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/auth';

function Post({deletePost, addLike, title, text, link, likes, comments, id, updatePosts, setUpdatePosts}) {

    //TODO: only delete if you are authenticated
    async function handleDelete(e){
        e.preventDefault();
        console.log("delete")
        await deletePost(id)
        setUpdatePosts({})
    }

    async function handleLike(e){
        e.preventDefault();
        console.log("like")
        await addLike(id)
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
            <Row>
                
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleComment(e)}><img src="https://img.icons8.com/ios-filled/50/000000/comments.png" width="30px" height="30px"/></Button>
                
                    {likes} <Button variant="Link" style={{width:"40px"}} onClick={e => handleLike(e)}><img src="https://img.icons8.com/ios-filled/50/000000/like--v1.png" width="30px" height="30px"/></Button>
                
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleDelete(e)}><img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" width="30px" height="30px"/></Button>
                
            </Row>
            </Card> 
        </Container>
        </a>
    )
}

Post.propTypes = {
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{deletePost, addLike, loadUser})(Post);