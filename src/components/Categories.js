import React from 'react';
import { Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categories() {
    return(
    <Col >
    <h2>Categories</h2>
    {/* change this to map from db user categories*/}
    <Row>
    <Link to="">First Category</Link>
    </Row>
    <Row>
    <Link to="">Second Category</Link>
    </Row>
    <Row>
    <Link to="">Third Category</Link>
    </Row>
    <Row>
    <Link to="">Fourth Category</Link>
    </Row>
    </Col>
    )
}

export default Categories;