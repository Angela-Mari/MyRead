import React, {useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { loadUser } from '../actions/auth';
import { getUserPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';


function Category({getUserPosts, auth: {user}}) {

    let { username, category } = useParams();
    const [categoryPosts, updateCategoryPosts] = useState([]);
    useEffect(() => {
        getUserPosts(user._id).then(posts => updateCategoryPosts([... posts]))
    }, [])


    return (
    <Col>
        <h1 className="my-header">{user.alias}'s Blog</h1>
        <h2 style={{marginLeft:"1rem"}}>Category: {category}</h2>
        <div style={{marginLeft:"2rem"}}>
            {
            categoryPosts
            .slice(0)
            .reverse()
            .filter(function (post) {return post.category == category})
            .map(function (post) {return <Post title = {post.title} text = {post.description} category={post.category} link = {post.url} likes = {post.likes} key = {1} id={post._id} updatePosts={categoryPosts} setUpdatePosts={updateCategoryPosts}> </Post>})
            }
        </div>
    </Col>
    )
}

Category.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{getUserPosts, loadUser})(Category);