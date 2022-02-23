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
            // loadUser()

            if ( username == user.alias ){
                setDataUser(user)
                getUserPosts(user._id).then(res=> updateCategoryPosts(res.slice(0)
                .reverse().filter(function (post) {return post.category.includes(category)})))
                setShow(true);
            }
            else {
                getAllUsers().then(res => {
                    res.forEach(element => {
                        if (element.alias === username){
                            setDataUser(element);
                            getUserPosts(element._id).then(res=> updateCategoryPosts(res.slice(0)
                            .reverse().filter(function (post) {return post.category.includes(category)})))
                            
                        }
                    });
                })
                setShow(true); //todo filter for actual user
            }
            
        }

        else{
            getAllUsers().then(res => {
                res.forEach(element => {
                    if (element.alias === username){
                        setDataUser(element)
                        getUserPosts(element._id).then(res=> updateCategoryPosts(res.slice(0)
                        .reverse().filter(function (post) {return post.category === category})));
                    }
                });
                setShow(true);
            }) 
        }
    }, [category])

    console.log(categoryPosts)
    return (
    <div style={{backgroundColor:"whiteSmoke"}}>
        <h1 className="my-header">{username}'s Blog</h1>        
        {show &&
        <Container fluid={true} >
        <Row>
        <Categories dataUser={dataUser}/>
        <Col>
        <h2 style={{marginLeft:"1rem"}}>Category: {category}</h2>
        <div style={{marginLeft:"1rem", marginRight:"1rem"}}>
            {
            categoryPosts !== undefined?
                categoryPosts.map((post) => 
                <Post picture = {post.picture} title = {post.title} text = {post.description} categories={post.category} link = {post.url} likes = {post.likes} key = {post._id} id={post._id} > </Post>
                )
            :
            <></>
            }
        </div>
        </Col>
        </Row>

        </Container>
        }
    </div>
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