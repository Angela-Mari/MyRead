import React from 'react';
import { Container, Card, Row, Col, Button, Badge} from 'react-bootstrap';
import "./Post.css"
import { deletePost } from "../actions/post"
import { addLike } from "../actions/post"

import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { loadUser } from '../actions/auth';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'


function Post({post, handleClick, dataUser, deletePost, addLike, updatePosts, setUpdatePosts, isAuthenticated, auth: { user } }, ) {

    //TODO: only delete if you are authenticated
    async function handleDelete(e){
        e.preventDefault();
        await deletePost(post._id)
        setUpdatePosts({})
    }

    //TODO: remove like
    async function handleLike(e){
        e.preventDefault();
        await addLike(post._id)
        setUpdatePosts({})
    }

    function handleComment(e){
        e.preventDefault();
    }

    function getSource(){
        if (post.url !== undefined) {
        let arr1 = post.url.split(":")
        if (arr1.length > 1) {
            let arr2 = arr1[1].split("/")
            if (arr2.length > 2) {
                return arr2[2]
            }
        }
        }
        else {
            return ""
        }
    }

    return (
        <Container onClick = {() => handleClick(post)} style={{marginTop:"0.5rem", marginLeft:"0rem", marginRight: "0.5rem", cursor:"pointer"}}>
            <Card className="p-3 mb-4 bg-white rounded" >
            <Row>
            <Col className="col-sm-auto">
            <img src={post.picture!== "" && post.picture !== undefined? post.picture: tempPic} width="300" height="200px" style={{objectFit:"cover"}}/>
            </Col>
            <Col>
                <Row>
                <Col>
                    <h3>
                        {post.title}
                    </h3>
                </Col>
                <Col className="col-sm-auto">
               { post.category.map((category, idx) => (
                      
                <>
                <Badge pill bg="primary" style={{fontSize:"1.2em"}} key = {idx} >
                    {category}
                </Badge>
                 {' '}
                </>))
                }
                </Col>
                </Row>
                <div>
                    {post.description.length <= 300? post.description : post.description.substring(0, 300).trim() + "... Read More"}
                </div>
                <div style={{marginTop:"0.5rem", cursor:"pointer"}} onClick={e => {window.location.href = post.url}}>
                    Source: <span style={{color:"#437eb6", textDecoration:"underline"}}>{getSource()}</span>
                </div>
                <Row className="bottom justify-content-end">
                    
                    {isAuthenticated?
                    <>
                    <Col xs={2}>
                            <Button variant="Link" style={{width:"40px"}} onClick={e => {window.location.href = post.url}}><img src="https://img.icons8.com/ios/96/000000/link--v1.png" height="25px" weight="25px"/></Button>
                        </Col>
                        <Col xs={2}>
                            <Button variant="Link" style={{width:"40px"}}> <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-1.png" height="25px" weight="25px"/> </Button>
                        </Col>
                    <Col xs={2}>
                        
                        
                            {post.likes !== undefined && post.likes.length > 0? 
                            <Row className="justify-content-center text-end">
                            <Col xs={6} style={{marginTop:".5rem", marginRight:"-1rem", fontWeight:"bold"}} >
                            {post.likes.length}
                            </Col> 
                            <Col xs={6} >
                            <Button variant="Link" onClick={e => handleLike(e)}> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="25px" weight="25px" style={{marginBottom:"0.5rem"}}/></Button>
                            </Col>
                            </Row>
                            : 
                            
                            <Button variant="Link" onClick={e => handleLike(e)}> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="25px" weight="25px" style={{marginBottom:"0.5rem"}}/></Button>
                            
                            }
                        
                        
                    </Col>
                    <Col xs={2}>
                        {
                            dataUser.alias === user.alias?
                    <Button variant="Link" style={{width:"40px"}} onClick={e => handleDelete(e)}><img src="https://img.icons8.com/pastel-glyph/64/000000/trash.png" height="25px" weight="25px"/></Button>
                        :
                        <></>
                }
                    </Col>
                    </>
                    :
                    <Row class="justify-content-center">
                        <Col xs={6}>
                            <Button variant="Link" style={{width:"40px"}} onClick={e => {window.location.href = post.link}}><img src="https://img.icons8.com/ios/96/000000/link--v1.png" height="25px" weight="25px"/></Button>
                        </Col>
                        <Col xs={6}>
                            <Button variant="Link" style={{width:"40px"}}> <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-1.png" height="25px" weight="25px"/> </Button>
                        </Col>
                    </Row>
                    } 
                </Row>
            </Col>
            </Row>
            </Card> 
        </Container>
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