import React, { useEffect, useState } from "react";
import { Container, Row, Navbar } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import Bio from "../components/Bio";
import fb from "../assets/img/fb.png";
import twitter from "../assets/img/twitter.png";
import ins from "../assets/img/ins.png";
import ex from "../assets/img/external.png";
import Edit from "../components/Edit";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/auth";
import "./Blog.css";
import btmNav from "./Carousel/pexels-jess-loiterton-4784090.jpg";
import listen from "../utils/eventBus";
function Blog({ isAuthenticated, auth: { user } }) {
    let { username } = useParams();
    const [updateCategories, setUpdateCategories] = useState([]);
    useEffect(() => {
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

    const resetbioObj = (obj) => {
        setbioObj(obj);
        setisshow(false);
        setEditing(true);
    };
    return (
        <>
            {isAuthenticated ? (
                <Container fluid={true}>
                    <Row>
                        {isEditing && <h1 className="my-header">{user.alias}'s Blog</h1>}
                        {isshow && <Edit userinfo={bioObj} setbioObj={resetbioObj} />}
                        {isEditing && <Categories params={bioObj} user={user}></Categories>}
                        {isEditing && <RecentPosts></RecentPosts>}
                    </Row>
                </Container>
            ) : (
                <Container>
                    <h1>Viewing {username}'s Blog</h1>
                    <Row>
                        <Categories updateCategories={updateCategories}></Categories>
                        <RecentPosts></RecentPosts>
                        <Bio params={bioObj} />
                    </Row>
                </Container>
            )}
        </>
    );
}

Blog.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Blog);
