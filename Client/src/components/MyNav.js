import React from 'react';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../actions/auth';
import { Link, useHistory } from 'react-router-dom';
import "./MyNav.css"

function MyNav({logout, auth: { user }, isAuthenticated}) {
    
    let history = useHistory();

    async function frontlogout(e){
        e.preventDefault()
        console.log("logging out...")
        await logout().then(history.push("/home")); //this is redirecting but user is not logged out thus still authenticated and redirects to here
    }

    function login(){
        history.push("/home")
    }
<<<<<<< HEAD
    const edit = () => {
        listen.emit("isShowEdit", "");
    };
=======
    
>>>>>>> 83fa38e21ef6af9bd7ab899f1a0c04a6a46de5c9
    return (
        <Navbar className="my-nav" expand="lg">
            {isAuthenticated ? (
                <Link to={`/blog/${user.alias}`} style={{ textDecoration: "none" }}>
                    <Navbar.Brand className="my-brand">MyRead <span style={{color:"#000000"}}><i><b>CURATOR MODE</b></i></span></Navbar.Brand>
                </Link>
            ) : (
                <Link to={"/home"} style={{ textDecoration: "none" }}>
                    <Navbar.Brand className="my-brand">MyRead</Navbar.Brand>
                </Link>
            )}
            <Navbar.Collapse className="justify-content-end">
                <Nav >
            {
                isAuthenticated ? 
                <> 
                <Navbar.Text style={{color:"white"}}>
                    Welcome {user.firstName} {user.lastName}
                    
                </Navbar.Text>
                <Nav.Link>
                <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white"}}>
                    Explore
                </Link>
                </Nav.Link>
                <NavDropdown title="Curator Tools" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                        <Link to="/create-post" style={{textDecoration:"none",color:"black"}}>
                            Create New Post
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to="/edit-profile" style={{textDecoration:"none",color:"black"}}>
                            Edit Profile
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item>
                        <Link key="setting" to="/settings" style={{textDecoration:"none",color:"black"}}>
                            Settings
                        </Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={(e) => {frontlogout(e)}} style={{color:"white"}}>
                        Logout
                </Nav.Link> 
                </>
                :
                <>
                <Nav.Link>
                <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white"}}>
                    Explore
                </Link>
                </Nav.Link>
                <Nav.Link onClick={login} style={{textDecoration:"none",color:"white"}}>
                    Login
                </Nav.Link>
                </>
            }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

MyNav.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, logout })(MyNav);
