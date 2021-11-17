import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import Bio from "../components/Bio";
import fb from "../assets/img/fb.png";
import twitter from "../assets/img/twitter.png";
import ins from "../assets/img/ins.png";
import ex from "../assets/img/external.png";
import Edit from "../components/Edit";
function Blog() {
    let { username } = useParams();
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
    const isshowEdit = () => {
        setisshow(true);
    };
    const resetbioObj = (obj) => {
        console.log(obj);
        setbioObj(obj);
        setisshow(false);
    };
    return (
        <Container>
            <Row>
                <h1>{username}'s Blog</h1>
                <Categories></Categories>
                <RecentPosts></RecentPosts>
                {!isshow && <Bio params={bioObj} isShowEdit={isshowEdit} />}
                {isshow && <Edit userinfo={bioObj} setbioObj={resetbioObj} />}
            </Row>
        </Container>
    );
}

export default Blog;
