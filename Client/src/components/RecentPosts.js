import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RecentPosts({getPosts}) {
    var postsArray;
    async function backendPosts(){
        backendPosts = await getPosts();
        console.log(backendPosts) // this is getting a return!
        postsArray = backendPosts.data.map((postIndex, index) => {
            return (<Post title = {postIndex['title']} text = {postIndex['description']} link = {postIndex['url']} key = {index} id={postIndex['_id']}> </Post>);})
        
    }
    
    useEffect(()=>backendPosts())

    return (
    <Col>
        <h2>Recent Posts</h2>
        {postsArray}
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