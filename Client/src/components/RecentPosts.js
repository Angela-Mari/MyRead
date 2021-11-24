import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RecentPosts({getPosts}) { 
  useEffect(() => {
    getPosts().then(posts => setPosts(posts))
   }, [])

    const [posts,setPosts] = useState();
    var postsArray = []
    
    // if(data){
    //     console.log(data)
    //     postsArray = data.data.map((postIndex, index) => {
    //     console.log(postIndex)
    //     return (<Post title = {postIndex['title']} text = {postIndex['description']} link = {postIndex['url']} key = {index} id={postIndex['_id']}> </Post>);})
    // }

    if (posts) {
      console.log(posts)
    }

   return (
            <Col>
              <h2>Recent Posts</h2>
                {posts && posts.length > 0 &&
                <div>
                {
                  posts.map((post) => (
                    <Post title = {post.title} text = {post.description} link = {post.url} key = {1} id={post.id}> </Post>
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