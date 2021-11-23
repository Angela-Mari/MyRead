import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RecentPosts({getPosts}) {
    const [data,setData] = useState({});

    async function backendPosts(){
        backendPosts = await getPosts();
        return backendPosts;
    }
    var postsArray = []
    
    if(data!= {}){
        postsArray = data.data.map((postIndex, index) => {
        console.log(postIndex)
        return (<Post title = {postIndex['title']} text = {postIndex['description']} link = {postIndex['url']} key = {index} id={postIndex['_id']}> </Post>);})
    }
    useEffect(() => {
        backendPosts()
        .then(data =>
          setData(data)
        );
       }, [])

   return (
            <Col>
                <h2>Recent Posts</h2>
                {postsArray != []? postsArray : <></>}
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