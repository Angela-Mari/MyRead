import React, { useEffect, useState } from "react";
import "./Bio.css";
import { Col, Row, Button } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"
import { useLocation, useHistory, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFollowing, getFollowing, removeFollowing } from '../actions/auth';

function Bio({dataUser, addFollowing, removeFollowing, getFollowing, isAuthenticated, auth: { user }, show}) {
    
    let history = useHistory();
   
    async function updateFollowing(type) {
        if (type == "add"){
            await addFollowing(dataUser._id).then(res => {
                getFollowing().then(res => {
                    console.log("got following:", res)
                    var myFollower = null
                    myFollower = res.find(follower => follower._id === dataUser._id)
                    if (myFollower == null) {
                        console.log("not following")
                        setFollowing("Follow")
                    }
                    else {
                        console.log("following")
                        setFollowing("Following")
                    }
                    console.log(res)
                })
            })
        }
        if (type == "remove"){
            await removeFollowing(dataUser._id).then(res => {
                getFollowing().then(res => {
                    console.log("got following:", res)
                    var myFollower = null
                    myFollower = res.find(follower => follower._id === dataUser._id)
                    if (myFollower == null) {
                        console.log("not following")
                        setFollowing("Follow")
                    }
                    else {
                        console.log("following")
                        setFollowing("Following")
                    }
                    console.log(res)
                })
            })
        }
       
    } 

    const [following, setFollowing] = useState({});
    const [displayUser, setDiplayUser] = useState(dataUser);

    

    useEffect(() => {
        console.log("in use effect bio")
        if (show && isAuthenticated && user && dataUser && user.alias != dataUser.alias){
            var myFollower = null
            myFollower = user.following.find(follower => follower._id === dataUser._id)
            if (myFollower == null) {
                console.log("not following")
                setFollowing("Follow")
            }
            else {
                console.log("following")
                setFollowing("Following")
            }
        }
        if(user && dataUser && user.alias == dataUser.alias) {
            console.log("user.alias == datauser.alias")
            setFollowing("Self")
        }

        setDiplayUser(dataUser)
        
    }, [show, dataUser, user]);

    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img onClick = {e=> {history.push(`/blog/${displayUser.alias}`)}} className= "bio-pic" src={displayUser.picture} />
                </Col>
            </Row>            
            <h3 style={{marginTop:"1rem"}}>{`${displayUser.firstName} ${displayUser.lastName}`}</h3>
            <p style={{marginBottom:"-0.25rem"}}>{displayUser.bio}</p>
            <a href = {displayUser.socials !== undefined && displayUser.socials.other !== undefined && displayUser.socials.other.slice(3) !== "http"?
            
            `http://${displayUser.socials.other}`
            :
            displayUser.socials !== undefined && displayUser.socials.other !== undefined?
                
                displayUser.socials.other : "" } target="_blank" ><span style={{color:"#437eb6", textDecoration:"underline"}}>{displayUser.socials !== undefined && displayUser.socials.other !== undefined ? displayUser.socials.other : "" }</span></a>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                
                <img onClick={e => {window.open(displayUser.socials.facebook)}} src="https://img.icons8.com/plasticine/100/000000/facebook-new.png" height="60px" width="60px" className="socials"/>
              
                </Col>
                <Col className="col-sm-auto">
 
                <img onClick={e => {window.open(displayUser.socials.instagram)}} src="https://img.icons8.com/plasticine/100/000000/instagram.png" height="60px" width="60px" className="socials"/>
        
                </Col>
            </Row>
            <Row className="justify-content-center">
                {
                    following === "Following"?
                        <Button className="rounded-pill" onClick={e => updateFollowing("remove")}>Following</Button> 
                        :
                    following === "Follow"?
                        <Button className="rounded-pill" onClick={e => updateFollowing("add")}>Follow</Button>
                        :
                        ""
                }
            </Row>
        </Col>
    );
}
Bio.propTypes = {
    addFollowing: PropTypes.func.isRequired,
    removeFollowing: PropTypes.func.isRequired,
    getFollowing: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{ addFollowing, getFollowing, removeFollowing })(Bio);
