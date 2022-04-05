import React from 'react';
import { Navbar,Nav, Button, Row, Container} from 'react-bootstrap';
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
        await logout().then(history.push("/home"));
    }

    function login(){
        history.push("/home")
    }

    return (
        <Navbar className="my-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
      {isAuthenticated ? 
            <Link to={"/home"} style={{ textDecoration: "none" }}>
                <Navbar.Brand className="my-brand"><b>MyRead</b></Navbar.Brand>
            </Link>
         : 
            <Link to={"/home"} style={{ textDecoration: "none" }}>
                <Navbar.Brand className="my-brand"><b>MyRead</b></Navbar.Brand>
            </Link>
        }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
      <Nav >
           {
                isAuthenticated && user !== null ? 
                <> 
                    <Navbar.Text style={{color:"white", paddingRight:"1rem", fontSize:"1.3rem", fontWeight:"bold"}}>
                        Curator {user.firstName} {user.lastName}    
                    </Navbar.Text>
                    
                    <Nav.Link>
                        <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white", fontSize:"1.3rem", fontWeight:"bold"}}>
                            Explore
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/create-post" style={{textDecoration:"none",color:"white", fontSize:"1.3rem", fontWeight:"bold"}}>
                            New Post
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/edit-profile" style={{textDecoration:"none",color:"white", fontSize:"1.3rem", fontWeight:"bold"}}>
                            Edit Profile
                        </Link>
                    </Nav.Link>
                    <Nav.Link 
                        className='d-lg-none d-xl-none'
                        style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}
                        onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                    </Nav.Link>
                    <Nav.Link 
                    className='d-lg-none d-xl-none'
                        style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}
                    onClick={(e) => {frontlogout(e)}} >
                    Logout
                    </Nav.Link>
                    
                    <Row className="d-none d-lg-flex">
                        <Button className="rounded-pill " style={{width:"40px", marginLeft:"1rem", backgroundColor:"#f4ca43", color:"#242b9b"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                        </Button>
                        <Button 
                            style={{ background:"white", color:"black"}}
                            className="rounded-pill "
                            variant="primary"
                            onClick={(e) => {frontlogout(e)}} >
                                Logout
                        </Button>
                    </Row>
                </>
                :
                <>
                    <Nav.Link>
                    <Link key="explore" to="/explore" style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}>
                        Explore
                    </Link>
                    </Nav.Link>

                    <Nav.Link className='d-lg-none d-xl-none' style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                    </Nav.Link>
                    <Nav.Link 
                    className='d-lg-none d-xl-none'
                        style={{textDecoration:"none",color:"white", fontSize:"1.2rem", fontWeight:"bold"}}
                        onClick={login}  >
                            Login
                    </Nav.Link>
                    <Row className="d-none d-lg-flex">
                        <Button className="rounded-pill " style={{width:"40px", marginLeft:"1rem", backgroundColor:"#f4ca43", color:"#242b9b"}} onClick={e => {window.location.href = "https://www.paypal.com/donate/?hosted_button_id=NFWC9PWNSDWBA"}}>Donate<img src={PaypalImage} height="35px" weight="35px"/>
                        </Button>
                        <Button 
                            style={{ background:"white", color:"black"}}
                            className="rounded-pill "
                            variant="primary"
                            onClick={login} >
                                Login
                        </Button>
                    </Row>
                </>
            }
            </Nav>
      </Navbar.Collapse>
      </Container>
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
