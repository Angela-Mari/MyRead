import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RecentPosts({getPosts}) {
    async function backendPosts(){
        const backendPosts = await getPosts();
        console.log(backendPosts) // this is getting a return!
    }
    
    useEffect(()=>backendPosts())

    const posts = [
        {
        'title': "First Title",
        'text': "Discription",
        'link': "https://www.google.com"
        },
        {
            'title': "Second Title",
            'text': "Discription",
            'link': "https://www.google.com"
            },

    ]

    const postsArray = posts.map((postIndex, index) => {
        return (<Post title = {postIndex['title']} text = {postIndex['text']} link = {postIndex['link']} key = {index}> </Post>);})
    
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