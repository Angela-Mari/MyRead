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
import background from './Carousel/pexels-jess-loiterton-4319752.jpg'
import PostDetail from "../components/PostDetail";

function Blog({isAuthenticated, auth:{user}, getAllUsers, getPost}) {
    let { username } = useParams();
    let { postId } = useParams();
    let { category } = useParams();
    const [dataUser, setDataUser] = useState({});
    const [show, setShow] = useState(false);
    const location = useLocation();
    const [selectedPost, setPost] = useState({});
    const [selectedCategory, setCategory] = useState("")
    const [updatePosts, setUpdatePosts] = useState({});

    console.log(postId)
    console.log(selectedPost)
    console.log(category)
    console.log(selectedCategory)

    
    async function checkPost(){
        if (postId !== undefined){
            console.log("post defined")
            if (selectedPost == {} || selectedPost._id !== postId){
                console.log("post not sent")
                await getPost(postId).then(res => {console.log(res)})
                console.log("testing")
            }
        }
    } 

    checkPost()

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

        console.log("in use effect blog")
        
        // console.log(location)
        // var pathArray = location.pathname.split('/');
        // console.log(pathArray)
        // if(pathArray.includes("post")){
        //     setPostDetail(true)
        // }
        // else {
        //     setPostDetail(false)
        // }

        if (isAuthenticated){
            loadUser()
            if ( username == user.alias ){
                setDataUser(user)
                setShow(true);
            }
            else {
                getAllUsers().then(res => {
                    res.forEach(element => {
                        if (element.alias === username){
                            setDataUser(element);
                        }
                    });
                    setShow(true);
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
                setShow(true);
            }) //todo filter for actual user
        }
    }, [])

   
    return (
        <>
            <Container fluid={true} style={{backgroundColor:"whiteSmoke"}} >
                <Row >
                    <h1 className="my-header">{dataUser.alias}'s Blog</h1>
                    {show && 
                        <Row>
                            <Categories dataUser={dataUser} setCategory ={setCategory} setUpdatePosts={setUpdatePosts}></Categories>
                            {postId !== undefined ? 
                                <PostDetail post={selectedPost} currator ={dataUser}></PostDetail>
                                :
                                <RecentPosts dataUser={dataUser} post={selectedPost} setPost={setPost} header = {category !== "" && category !== undefined? `Category: ${selectedCategory}` : "Recent Posts"} category={selectedCategory} updatePosts={updatePosts} setUpdatePosts={setUpdatePosts}></RecentPosts>
                            }
                        </Row>
                    }
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
