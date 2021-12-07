import React from 'react';
import { Navbar,Nav, Button, Container, Row, Col, NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../actions/auth';
import { Link, useHistory } from 'react-router-dom';
import "./MyNav.css"

function MyNav({auth: { user } , isAuthenticated}) {
    
    let history = useHistory();

    async function frontlogout(){
        console.log("logging out...")
        logout() //this is redirecting but user is not logged out thus still authenticated and redirects to here
        history.push("/home");
    }

    return (
    <Navbar className="my-nav" expand="lg">
        {
            isAuthenticated ? 
            <Link to={`/blog/${user.alias}`} style={{textDecoration:"none"}}>
                <Navbar.Brand className="my-brand">MyRead</Navbar.Brand>
            </Link>
            :
            <Link to={"/home"} style={{textDecoration:"none"}}>
                <Navbar.Brand className="my-brand">MyRead</Navbar.Brand>
            </Link>
        }
            <Navbar.Collapse className="justify-content-end">
                <Nav >
            {
                isAuthenticated ? 
                <> 
                <Navbar.Text style={{color:"white"}}>
                    Welcome {user.firstName} {user.lastName}
                </Navbar.Text>
                <NavDropdown title="Curator Tools" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/create-post" style={{textDecoration:"none",color:"black"}}>
                            Create New Post
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                        <Link key="setting" to="/settings" style={{textDecoration:"none",color:"black"}}>
                            Settings
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={frontlogout} style={{color:"white"}}>
                        Logout
                </Nav.Link> 
                </>
                :
                <Nav.Link>
                    Login
                </Nav.Link> // TODO: change to route back to home + logout
            }
            </Nav>
            </Navbar.Collapse>
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
