import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import { getPost } from '../actions/post';
import { loadUser, getAllUsers } from '../actions/auth';
import "./Blog.css";
import { useLocation } from 'react-router-dom'
import PostDetail from "../components/PostDetail";

function Blog({isAuthenticated, auth:{user}, getAllUsers, getPost}) {
    let { username } = useParams();
    let { postId } = useParams();
    let { category } = useParams();
    const [dataUser, setDataUser, dataUserRef] = useState({});
    const [show, setShow] = useState([false]);
    const [selectedPost, setPost] = useState({});
    const [selectedCategory, setCategory] = useState("")
    const [updatePosts, setUpdatePosts] = useState({});

    async function checkPost(){
        if (postId !== undefined){
            if (Object.keys(selectedPost).length !== 0 || selectedPost._id !== postId){
                
                await getPost(postId).then(res => {
                    setPost(res.data)  
                    setShow([true]);
                })
                
            }
        }
        else {
            setShow([true])
        }
    } 

    if (selectedCategory !== category){
        if (category == "undefined") {
            setCategory("")
            setUpdatePosts({})
        }
        else {
            setCategory(category)
            setUpdatePosts({})
        }   
        
    }

    useEffect(() => {

        if (isAuthenticated){
            loadUser()
            if ( username == user.alias ){
                setDataUser(user) 
            }
            else {
                getAllUsers().then(res => {
                    res.forEach(element => {
                        if (element.alias === username){
                            setDataUser(element);
                        }
                    });
                    
                }) //todo filter for actual user
            }
            
        }
        else{
            getAllUsers().then(res => {
                res.forEach(element => {
                    if (element.alias === username){
                        setDataUser(element);
                    }
                });
                
            }) //todo filter for actual user
        }
        checkPost()
    }, [])

   
    return (
        <>
            <Container fluid={true} style={{backgroundColor:"whiteSmoke"}} >
                <Row >
                        <Row>
                            <h1 className="my-header">{dataUser.alias}'s Blog</h1>
                            <Categories dataUser={dataUser} setCategory ={setCategory} setUpdatePosts={setUpdatePosts}></Categories>
                            {postId !== undefined && selectedPost !== {} && selectedPost !== undefined ? 
                                <PostDetail post={selectedPost} currator ={dataUser}></PostDetail>
                                :
                                <RecentPosts show = {show} dataUser={dataUser} post={selectedPost} setPost={setPost} header = {category !== "" && category !== undefined? `Category: ${selectedCategory}` : "Recent Posts"} category={selectedCategory} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}></RecentPosts>
                            }
                        </Row>
                    </Row>
                </Container>
            </>
        );
    
}

Blog.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps,{loadUser, getAllUsers, getPost})(Blog);
