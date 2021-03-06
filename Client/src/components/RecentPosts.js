import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getUserPosts } from '../actions/post';
import { getAllUsers } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./RecentPosts.css";
import { useHistory } from "react-router-dom";

function RecentPosts({getUserPosts, dataUser, show, setPost, header, category, updatePosts, setUpdatePosts}) { 
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([])
  let history = useHistory();
  
  useEffect(() => {
    if (dataUser !== undefined && Object.keys(dataUser).length !== 0){
      getUserPosts(dataUser._id).then(
       
        res => {
          if (category !== undefined && category !== ""){
            setPosts(res.slice(0).reverse().filter(function (post) {return post.category.includes(category)}))
            setShowPosts(true)

          }
          else {
            setPosts(res.slice(0).reverse())
            setShowPosts(true)
          }
          
          
        }
      )
    }
    else {
      setShowPosts(false)
    }
    }, [dataUser, updatePosts])

  
  function handleClick(post) {
    setPost(post)
    history.push(`/blog/${dataUser.alias}/post/${post._id}`)    
  }

  return (
            <Col  xs={9} md={9} style={{marginTop:"-.5rem", paddingTop:"0.5rem"}}>
              <h2 style={{marginTop:"0"}}>{header}</h2>
                { show && showPosts && posts && posts.length > 0 &&
              <div>
                  {
                    posts.map((post) => (
                      <Post handleClick = {handleClick} dataUser = {dataUser}  post = {post} key = {post._id} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}> </Post>
                    ))
                  }
              </div>}
                
              
            </Col>
            )
    
}

RecentPosts.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    getAllUsers: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {
    getUserPosts,
    getAllUsers,
  })(RecentPosts);
