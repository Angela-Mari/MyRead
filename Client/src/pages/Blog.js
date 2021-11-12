import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Categories from '../components/Categories';
import RecentPosts from '../components/RecentPosts';
import Bio from '../components/Bio';

function Blog() {

    let { username } = useParams();

    return(
        <Container>
        <Row>
            <h1>{username}'s Blog</h1>
            <Categories username={username}></Categories>
            <RecentPosts></RecentPosts>
            <Bio></Bio>
        </Row>
        </Container>
    )
}

export default Blog;

 