import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, getAllUsers } from '../actions/auth';
import "./Blog.css";

function Blog({isAuthenticated, auth:{user}, getAllUsers}) {
    console.log("in blog")
    let { username } = useParams();
    const [dataUser, setDataUser] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
<<<<<<< HEAD
        loadUser();
        setUpdateCategories(user.categories);
    }, []);
    // New edit.js and edit.css added some new code to blog.js
    // This is the data you request from the server based on the username parameter
    const bioObjs = {
        id: 0,
        name: "Leonardo DiCaprio",
        headerImg: "https://media.gettyimages.com/photos/leonardo-di-caprio-picture-id635926095?s=2048x2048",
        intro: `Leonardo DiCaprio, in full Leonardo Wilhelm DiCaprio, (born November 11, 1974, Los Angeles, California, U.S.), American actor and producer who emerged in the 1990s as one ofHollywood’s leading performers, noted for his portrayals of unconventional and complex characters.`,
        navigators: [
            { herf: "https://www.google.com/", icon: fb, linkname: "faceBook link" },
            { herf: "https://www.google.com/", icon: ins, linkname: "instagram link" },
            { herf: "https://www.google.com/", icon: twitter, linkname: "twitter link" },
            { herf: "https://www.google.com/", icon: ex, linkname: "external link" },
        ],
    };
    const [bioObj, setbioObj] = useState(bioObjs);
    let [isshow, setisshow] = React.useState(false);
    let [isEditing, setEditing] = React.useState(true);
    listen.addListener("isShowEdit", (msg) => {
        setisshow(true);
        setEditing(false);
    });
    const resetbioObj = (obj) => {
        setbioObj(obj);
        setisshow(false);
        setEditing(true);
    };
=======
        console.log("in use effect blog")
        if (isAuthenticated){
            loadUser()
            setDataUser(user)
            setShow(true);
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

>>>>>>> 83fa38e21ef6af9bd7ab899f1a0c04a6a46de5c9
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <h1 className="my-header">{dataUser.alias}'s Blog</h1>
                    {show && <Categories dataUser={dataUser}></Categories>}
                    {show && <RecentPosts dataUser={dataUser}></RecentPosts>}
                </Row>
            </Container>
        </>
    );
}

Blog.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps,{loadUser, getAllUsers})(Blog);
