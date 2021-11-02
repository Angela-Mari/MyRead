import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

function Nav({user, isAuthenticated}) {
    return (
    <Row>
        <Col>
        <h1>MyRead</h1>
        </Col>
        {
            isAuthenticated?
            <Col className="text-right">
            Logged in as: {user.firstName} {user.lastName}
            </Col>
            :
            <Col className="text-right">
            <Button variant="link">
            Log in
            </Button>
            </Col>
        }
    </Row>
    )
}
export default Nav;