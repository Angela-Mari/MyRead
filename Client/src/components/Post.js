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

    //TODO: remove like
    async function handleLike(e){
        e.preventDefault();
        console.log("like")
        await addLike(id)
        setUpdatePosts({})
    }

    function handleComment(e){
        e.preventDefault();
        console.log("comment")
    }
    console.log(title, text, link)
    return (
        <a className="post-link" href={link} target="_blank">
        <Container style={{marginTop:"0.5rem", marginLeft:"0.5rem"}}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" syle={{padding:"0.5rem"}}>
            <Row>
            <Col><h3>
                {title}
                
            </h3>
            <div>
                {text}
            </div>
            </Col>
            <Col className="text-end float-end">
            <img src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F07%2Fpython-3.10-1.jpg&signature=c9d1d6710c98131fbe2e493a5b6ea092" width="300" height="150px" style={{objectFit:"cover"}}/>
            </Col>
            </Row>
            
            <Row>
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleComment(e)}><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png" height="25px" weight="25px"/></Button>
                    <Button variant="Link" style={{width:"80px"}} onClick={e => handleLike(e)}><span style={{fontSize:"1.5rem"}}>{likes.length > 0? likes.length : ""}</span> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="25px" weight="25px" style={{marginBottom:"0.5rem"}}/></Button>
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleDelete(e)}><img src="https://img.icons8.com/pastel-glyph/64/000000/trash.png" height="25px" weight="25px"/></Button> 
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