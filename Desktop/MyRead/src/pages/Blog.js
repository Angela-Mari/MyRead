import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import Bio from "../components/Bio";
import fb from "../assets/img/fb.png";
import twitter from "../assets/img/twitter.png";
import github from "../assets/img/github.png";
function Blog() {
    let { username } = useParams();
    // This is the data you request from the server based on the username parameter
    const bioObj = {
        id: 0,
        name: "Leonardo DiCaprio",
        headerImg: "https://media.gettyimages.com/photos/leonardo-di-caprio-picture-id635926095?s=2048x2048",
        intro: `Leonardo DiCaprio, in full Leonardo Wilhelm DiCaprio, (born November 11, 1974, Los Angeles, California, U.S.), American actor and producer who emerged in the 1990s as one ofHollywood’s leading performers, noted for his portrayals of unconventional and complex characters.`,
        navigators: [
            { herf: "https://www.google.com/", icon: fb },
            { herf: "https://www.google.com/", icon: twitter },
            { herf: "https://www.google.com/", icon: github },
        ],
    };
    return (
        <Container>
            <Row>
                <h1>{username}'s Blog</h1>
                <Categories></Categories>
                <RecentPosts></RecentPosts>
                <Bio params={bioObj}></Bio>
            </Row>
        </Container>
    );
}

export default Blog;
