import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import "./Post.css"

function Post({title, text, image, link}) {
    return (
        <a className="post-link" href={link} target="_blank">
        <Container>
            <Card>
            <h3>
                {title}
            </h3>
            <div>
                {text}
            </div> 
            </Card> 
        </Container>
        </a>
    )
}
export default Post;