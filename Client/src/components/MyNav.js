import React from 'react';
import { Navbar,Nav, NavDropdown, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, logout } from '../actions/auth';
import { Link, useHistory } from 'react-router-dom';
import "./MyNav.css"
import PaypalImage from "../pages/Carousel/paypal.png";

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

    return (
        <Navbar className="my-nav" expand="lg">
            {isAuthenticated ? (
                <Link to={"/home"} style={{ textDecoration: "none" }}>
                    <Navbar.Brand className="my-brand"><b>MyRead</b></Navbar.Brand>
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
                <Navbar.Text style={{color:"white", paddingRight:"1rem", fontSize:"1.2rem", fontWeight:"bold"}}>
                    Curator {user.firstName} {user.lastName}    
                </Navbar.Text>
                
                <Nav.Link>
                <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}>
                    Explore
                </Link>
                </Nav.Link>
               
                <NavDropdown title="Curator Tools" id="collasible-nav-dropdown" style={{fontSize:"1.2rem", fontWeight:"bold"}}>
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
                
                <Button className="rounded-pill" style={{width:"40px", backgroundColor:"#f4ca43", color:"#242b9b"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                </Button>
                <Button 
                    style={{width:"fit-content", marginRight:"0.5rem", background:"white", color:"black"}}
                    className="rounded-pill"
                    variant="primary"
                    onClick={(e) => {frontlogout(e)}} >
                        Logout
                </Button>
                </>
                :
                <>
                <Nav.Link>
                <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}>
                    Explore
                </Link>
                </Nav.Link>

                <Button className="rounded-pill" style={{width:"40px", backgroundColor:"#f4ca43", color:"#242b9b"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                </Button>
            
                <Button 
                    style={{width:"fit-content", marginRight:"0.5rem", background:"white", color:"black"}}
                    className="rounded-pill"
                    variant="primary"
                    onClick={login}  >
                        Login
                </Button>
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
