import React from "react";
import "./Bio.css";
import { Col, Row, Button } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"
import { useLocation, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFollowing } from '../actions/auth';

function Bio({dataUser, addFollowing, isAuthenticated, auth: { user }}) {
    
    let history = useHistory();


    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img onClick = {e=> {history.push(`/blog/${dataUser.alias}`)}} className= "bio-pic" src={dataUser.picture} />
            </Col>
            </Row>            
            <h3 style={{marginTop:"1rem"}}>{`${dataUser.firstName} ${dataUser.lastName}`}</h3>
            <p>{dataUser.bio}</p>
            <div style={{marginTop:"0.5rem", cursor:"pointer"}} onClick={e => {window.location.href = dataUser.socials.other}}>
                    <span style={{color:"#437eb6", textDecoration:"underline"}}>{dataUser.socials !== undefined && dataUser.socials.other !== undefined ? dataUser.socials.other : "" }</span>
            </div>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                
                <img onClick={e => {window.location.href = dataUser.socials.facebook}} src="https://img.icons8.com/plasticine/100/000000/facebook-new.png" height="60px" width="60px" className="socials"/>
              
                </Col>
                <Col className="col-sm-auto">
 
                <img onClick={e => {window.location.href = dataUser.socials.instagram}} src="https://img.icons8.com/plasticine/100/000000/instagram.png" height="60px" width="60px" className="socials"/>
        
                </Col>
            </Row>
            <Row>
                {/* {
                    isAuthenticated && user.alias == dataUser.alias ? "" : user.following.includes(dataUser)? 
                        <Button>Following</Button> 
                            : 
                        <Button onClick={e=>addFollowing(dataUser._id)}>Follow</Button>
                } */}
            </Row>
        </Col>
    );
}
Bio.propTypes = {
    addFollowing: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{ addFollowing })(Bio);
