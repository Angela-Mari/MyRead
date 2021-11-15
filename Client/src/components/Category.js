import React from 'react';
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router';

function Category() {

    let { username, category } = useParams();

    return (
    <Col>
        <h2>Category:{category}</h2>
    </Col>
    )
}
export default Category;