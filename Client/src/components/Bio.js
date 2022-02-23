import React from "react";
import "./Bio.css";
import { Col, Row, Button } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"

function Bio({dataUser}) {
    
    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img style={{borderRadius:"50%", height:"100px", width:"100px", objectFit:"cover"}} src={dataUser.picture} />
            </Col>
            </Row>            
            <h3 style={{marginTop:"1rem"}}>{`${dataUser.firstName} ${dataUser.lastName}`}</h3>
            <p className="introInfo mt10">{dataUser.bio}</p>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                
                <img onClick={e => {window.location.href = dataUser.socials.facebook}} src={fb} height="40px" width="40px" className="socials"/>
              
                </Col>
                <Col className="col-sm-auto">
 
                <img onClick={e => {window.location.href = dataUser.socials.instagram}} src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" height="45px" width="45px" className="socials"/>
        
                </Col>
                <Col className="col-sm-auto">
                <img src="https://img.icons8.com/flat-round/48/000000/link--v1.png" height="40px" width="40px" className="socials"/>
                </Col>
                
            </Row>
        </Col>
    );
}
export default Bio;
