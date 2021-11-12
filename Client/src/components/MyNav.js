import React from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';


function MyNav({user, isAuthenticated}) {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">MyRead</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        
        {
            isAuthenticated &&
            <Navbar.Text>
                Signed in as: <a href="#login">{user.firstName} {user.lastName}</a>
            </Navbar.Text>
        }
        {
            isAuthenticated?
            <Nav.Link href="#home">Logout</Nav.Link>
            :
            <Nav.Link href="#home">Logout</Nav.Link>
        }
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default MyNav;