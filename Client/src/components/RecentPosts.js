import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RecentPosts({getPosts}) { 
  const [updatePosts, setUpdatePosts] = useState({});
  useEffect(() => {
    getPosts().then(posts => setPosts(posts))
   }, [updatePosts])

    const [posts,setPosts] = useState();
    
    console.log(updatePosts)

    if (posts) {
      console.log(posts)
    }

   return (
            <Col  xs={2} md={6}>
              <h2>Recent Posts</h2>
                {posts && posts.length > 0 &&
                <div>
                {
                  posts.map((post) => (
                    <Post title = {post.title} text = {post.description} link = {post.url} likes = {post.likes} key = {1} id={post._id} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}> </Post>
                  ))
                }
                </div>
                }
                {/* {postsArray != []? postsArray : <></>} */}
            </Col>
            )
    
}

RecentPosts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, {
    getPosts,
  })(RecentPosts);
