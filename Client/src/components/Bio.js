import React from "react";
import "./Bio.css";
import { Col, Row } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"

function Bio({dataUser}) {
    
    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img style={{borderRadius:"50%", border: "1px black solid", maxHeight:"100px", maxWidth:"100px", objectFit:"cover"}} src={dataUser.picture} />
            </Col>
            </Row>            
            <h3 style={{marginTop:"1rem"}}>{`${dataUser.firstName} ${dataUser.lastName}`}</h3>
            <p className="introInfo mt10">{dataUser.bio}</p>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                <img src={fb} height="40px" width="40px"/>
                </Col>
                <Col className="col-sm-auto">
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" height="45px" width="45px"/>
                </Col>
                <Col className="col-sm-auto">
                <img src="https://img.icons8.com/flat-round/48/000000/link--v1.png" height="40px" width="40px"/>
                </Col>
                
            </Row>
        </Col>
    );
}
export default Bio;
