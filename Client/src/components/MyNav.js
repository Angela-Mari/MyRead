import React from 'react';
import { Navbar,Nav, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../actions/auth';
import { Link } from 'react-router-dom';

function MyNav({auth: { user } , isAuthenticated}) {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Link to={`/${user.alias}`} style={{textDecoration:"none"}}>
            <Navbar.Brand>MyRead</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
        {
            isAuthenticated ? //change to a route to post builder form
            <> 
            <Nav.Link>
            <Link to="/create-post" style={{textDecoration:"none"}}>
            Create New Post
            </Link>
            </Nav.Link> 
            <Navbar.Text>
                {/* Signed in as: {user.firstName} {user.lastName} */}
            </Navbar.Text>
            <Nav.Link>
            <Link key="setting" to="/setting" style={{textDecoration:"none"}}>
                        Settings
            </Link>
            </Nav.Link>
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

MyNav.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{loadUser, logout})(MyNav);
