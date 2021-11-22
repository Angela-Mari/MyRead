import React from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';


function MyNav({user, isAuthenticated}) {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">MyRead</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
        {
            isAuthenticated ? //change to a route to post builder form
            <> 
            <Nav.Link>Create New Post</Nav.Link> 
            <Navbar.Text>
                Signed in as: {user.firstName} {user.lastName}
            </Navbar.Text>
            <Nav.Link href="#home">Logout</Nav.Link> 
            </>
            :
            <Nav.Link href="#home">Login</Nav.Link> // TODO: change to route back to home + logout
        }
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default MyNav;