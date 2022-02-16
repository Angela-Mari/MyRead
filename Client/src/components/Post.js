import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import "./Post.css"
import { deletePost } from "../actions/post"
import { addLike } from "../actions/post"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/auth';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'

function Post({picture, deletePost, addLike, title, text, link, likes, category, comments, id, updatePosts, setUpdatePosts, isAuthenticated}) {

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

    function getSource(){
        if (link !== undefined) {
        let arr1 = link.split(":")
        let arr2 = arr1[1].split("/")
        // console.log(arr2)
        return arr2[2]
        }
        else {
            return ""
        }
    }

    return (
        // <a className="post-link" href={link} target="_blank">
        <Container style={{marginTop:"0.5rem", marginLeft:"0.5rem", marginRight: "0.5rem"}}>
            <Card border="dark" className="p-3 mb-5 bg-white rounded ">
            <Row>
            <Col className="col-sm-auto">
            <img src={picture!== ""? picture: tempPic} width="300" height="200px" style={{objectFit:"cover"}}/>
            </Col>
            <Col>
                <Row>
                <Col>
                    <h3>
                        {title}
                    </h3>
                </Col>
                <Col className="col-sm-auto">
                <Badge pill bg="primary" style={{fontSize:"1.2em"}}>
                    {category}
                </Badge>
                </Col>
                </Row>
                <div>
                    {text}
                </div>
                <div style={{marginTop:"0.5rem"}}>
                    Source: {getSource()}
                </div>
                <Row className="bottom">
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleComment(e)}><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png" height="35px" weight="35px"/></Button>
                    <Button variant="Link" style={{width:"100px"}} onClick={e => handleLike(e)}><span style={{fontSize:"2rem"}}>{likes !== undefined && likes.length > 0? likes.length : ""}</span> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="35px" weight="35px" style={{marginBottom:"0.5rem"}}/></Button>
                    {isAuthenticated && <Button variant="Link" style={{width:"40px"}} onClick={e => handleDelete(e)}><img src="https://img.icons8.com/pastel-glyph/64/000000/trash.png" height="25px" weight="25px"/></Button>} 
                </Row>
            </Col>
            </Row>
            </Card> 
        </Container>
        // </a>
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