import React, { useEffect, useState } from 'react';
import { Col, Row, Badge, Button } from 'react-bootstrap';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from './Comments';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'
import { addLike } from "../actions/post"
import { getPost } from '../actions/post';
import {Link} from 'react-router-dom';


function PostDetail({post, currator, addLike, getPost, isAuthenticated}) { 
  
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState(post.likes)

    useEffect(() => {
        if (currator !== undefined && Object.keys(currator).length !== 0 && post !== undefined && Object.keys(post).length){
            setShow(true)
        }
    }, [currator, post])

    async function refreshLikes(){
        await getPost(post._id).then(res => {
            setLikes([...res.data.likes])})
        console.log("updated likes")
    }
    
    //TODO: remove like
    async function handleLike(e){
        e.preventDefault();
        await addLike(post._id).then(e => refreshLikes())
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

            <Col  xs={9} md={9} style={{marginTop:"0.5rem", paddingTop:"0.5rem", paddingRight:"1rem", backgroundColor:"white", paddingBottom:"1rem"}}>
                { show &&
                    <Row>
                    <Col xs={6}>
                    <h1>{post.title}</h1>
                    <h3 style={{color:"dimgrey"}}><i>Curated by: </i>{currator.firstName} {currator.lastName}</h3>
                    <p>{post.description}</p>
                    <div style={{marginTop:"0.5rem", cursor:"pointer"}} onClick={e => {window.location.href = post.url}}>
                        Source: <span style={{color:"#437eb6", textDecoration:"underline"}}>{getSource()}</span>
                    </div>
                    {
                        isAuthenticated?
                        <Row style={{marginTop:"0.5rem"}}>
                        <Col xs={2}>
                            <Link
                                to={{
                                    pathname: "/create-post",
                                    state: 
                                        { 
                                            title: post.title,
                                            description: post.description,
                                            url: post.url
                                        }
                                }}
                                >
                                    <Button className="rounded-pill">
                                        Reblog
                                    </Button>
                                </Link>
                            
                        </Col>
                        <Col xs={2}>
                            { likes !== undefined && likes.length > 0?
                                <Row className="justify-content-center text-end">
                                    <Button variant="Link" onClick={e => handleLike(e)}>{likes.length}<img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="25px" weight="25px"style={{marginLeft:"0.5rem", marginBottom:"0.5rem"}}/></Button>
                                </Row>
                            : 
                                <Button variant="Link" onClick={e => handleLike(e)}> <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" height="25px" weight="25px" style={{marginLeft:"0.5rem", marginBottom:"0.5rem"}}/></Button>
                            }
                        </Col>
                        <Col xs={2}>
                        <Button variant="Link" style={{width:"40px"}} onClick={e => {window.location.href = post.link}}><img src="https://img.icons8.com/ios/96/000000/link--v1.png" height="25px" weight="25px"/></Button>
                        </Col>
                    </Row>
                    :
                    ""
                    }
                    
                    
                    </Col>
                    <Col xs={6}>
                    <Row>
                    <Row className="justify-content-end" style={{marginTop:"1rem"}}>
                    <Col className="col-sm-auto" style={{marginRight:"-1.5rem"}}>
                    { post.category.map((category, idx) => (
                        
                    <>
                    {' '}
                    <Badge pill bg="primary" style={{fontSize:"1.2em"}} key = {idx} >
                        {category}
                    </Badge>
                    
                    </>))
                    }
                    </Col>
                    </Row>
                    <img 
                                src={post.picture !== "" && post.picture !== undefined? post.picture: tempPic} 
                                alt="post picture" 
                                class="img-responsive" 
                                height= "300px"
                                style={{objectFit:"cover", marginBottom:"1rem", marginTop:"1rem"}}
                            />
                        
                    </Row>
                    
                    </Col>
                    <Comments post={post} show={show} />
                    </Row>
                }
            </Col>
        )
}

PostDetail.propTypes = {
    addLike: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {getPost, addLike
  })(PostDetail);