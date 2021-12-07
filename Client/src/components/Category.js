import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { loadUser, getAllUsers } from '../actions/auth';
import { getUserPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from './Post';
import Categories from './Categories';


function Category({isAuthenticated, auth:{user}, getAllUsers, getUserPosts}) {

    let { username, category } = useParams();
    const [categoryPosts, updateCategoryPosts] = useState([]);
    const [dataUser, setDataUser] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isAuthenticated){
            loadUser()
            setDataUser(user)
            getUserPosts(user._id).then(res=> updateCategoryPosts(res))
            setShow(true);
        }
        else{
            getAllUsers().then(res => {
                res.forEach(element => {
                    if (element.alias == username){
                        setDataUser(element)
                        getUserPosts(element._id).then(res=> updateCategoryPosts(res));
                    }
                });
                setShow(true);
            }) 
        }
    }, [])

    return (
    <>
        <h1 className="my-header">{username}'s Blog</h1>        
        {show &&
        <Container fluid={true}>
        <Row>
        <Categories dataUser={dataUser}/>
        <Col>
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
        </Row>

        </Container>
        }
    </>
    )
}

Category.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    getUserPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{getUserPosts, loadUser, getAllUsers})(Category);