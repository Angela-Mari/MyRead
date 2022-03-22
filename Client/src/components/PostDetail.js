import React, { useEffect, useState } from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from './Comments';
import tempPic from '../pages/Carousel/pexels-jess-loiterton-4784090.jpg'

function PostDetail({post, currator}) { 
  
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (currator !== undefined && Object.keys(currator).length !== 0 && post !== undefined && Object.keys(post).length){
            setShow(true)
        }
    }, [currator, post])
    
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
                <h3 style={{color:"dimgrey"}}><i>Currated by: </i>{currator.firstName} {currator.lastName}</h3>
                <p>{post.description}</p>
                <div style={{marginTop:"0.5rem", cursor:"pointer"}} onClick={e => {window.location.href = post.url}}>
                    Source: <span style={{color:"#437eb6", textDecoration:"underline"}}>{getSource()}</span>
                </div>
                </Col>
                <Col xs={6}>
                <Row>
                <Row style={{marginTop:"1rem"}}>
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
                <img 
                            src={post.picture !== "" && post.picture !== undefined? post.picture: tempPic} 
                            alt="post picture" 
                            class="img-responsive" 
                            height= "300px"
                            style={{objectFit:"cover", marginBottom:"1rem", marginTop:"1rem"}}
                        />
                    
                </Row>
                
                </Col>
                <Comments post={post} />
                </Row>
                }
            </Col>
        )
}

PostDetail.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    getAllUsers: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {
  })(PostDetail);