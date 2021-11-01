import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Categories from '../components/Categories';
import RecentPosts from '../components/RecentPosts';
import Bio from '../components/Bio';
import GoogleBtn from '../Google/GoogleBtn';

function Blog() {

    let { username } = useParams();

    return(
        <Container>
        <Row>
            <h1>{username}'s Blog</h1>
            <Categories></Categories>
            <RecentPosts></RecentPosts>
            <Bio></Bio>
            <GoogleBtn/>
        </Row>
        </Container>
    )
}

export default Blog;

 