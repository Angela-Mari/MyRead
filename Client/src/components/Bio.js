import React, { useEffect, useState } from "react";
import "./Bio.css";
import { Col, Row, Button } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"
import { useLocation, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFollowing, getFollowing } from '../actions/auth';
import e from "cors";

function Bio({dataUser, addFollowing, getFollowing, isAuthenticated, auth: { user }, show}) {
    
    let history = useHistory();
   
    async function updateFollowing() {
        await addFollowing(dataUser._id).then(res => {
            getFollowing().then(res => {
                console.log("got following:", res)
                setFollowing(res)
                console.log(res)
            })
        })
    } 

    const [following, setFollowing] = useState({});

    useEffect(() => {
        console.log("in use effect")
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
        
    }, [show, dataUser, user]);

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
                {
                    following === "Following"?
                        <Button>Following</Button> 
                        :
                    following === "Follow"?
                        <Button onClick={e => updateFollowing()}>Follow</Button>
                        :
                        ""
                }
            </Row>
        </Col>
    );
}
Bio.propTypes = {
    addFollowing: PropTypes.func.isRequired,
    getFollowing: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{ addFollowing, getFollowing })(Bio);
