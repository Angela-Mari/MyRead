import React, { useEffect, useState } from 'react';
import { Col, Navbar } from 'react-bootstrap';
import Post from './Post';
import { getUserPosts } from '../actions/post';
import { getAllUsers } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./RecentPosts.css";
import { useParams } from 'react-router';

function RecentPosts({getUserPosts, dataUser, show}) { 
  const [updatePosts, setUpdatePosts] = useState({});
  const [showPosts, setShowPosts] = useState(false);
  let { username } = useParams();
  
  useEffect(() => {
    if (dataUser != undefined){
    getUserPosts(dataUser._id).then(
        res => {
          setPosts(res)
          setShowPosts(true)
        }
      )
      }
    }, [updatePosts])

  const [posts,setPosts] = useState();

   return (
            <Col  xs={9} md={9}>
              <h2 style={{marginTop:"0"}}>Recent Posts</h2>
                {showPosts && posts && posts.length > 0 &&
              <div>
                  {
                    posts.slice(0).reverse().map((post) => (
                      <Post title = {post.title} text = {post.description} category={post.category} link = {post.url} likes = {post.likes} key = {1} id={post._id} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}> </Post>
                    ))
                  }
                </div>}
                
              <div className="btm-nav">
                <p>Blog as you surf</p>
              </div>
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
