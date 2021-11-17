import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Post from './Post';

function RecentPosts() {

    const posts = [
        {
        'title': "First Title",
        'text': "Discription",
        'link': "https://www.google.com"
        },
        {
            'title': "Second Title",
            'text': "Discription",
            'link': "https://www.google.com"
            },

    ]

    const postsArray = posts.map((postIndex, index) => {
        return (<Post title = {postIndex['title']} text = {postIndex['text']} link = {postIndex['link']} key = {index}> </Post>);})
    
    return (
    <Col>
        <h2>Recent Posts</h2>
        {postsArray}
    </Col>
    )
}
export default RecentPosts;