import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {

    let { username } = useParams();

    return(
        <h1>My Blog! {username} </h1>
    )
}

export default Blog;

 