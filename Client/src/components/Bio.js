import React from "react";
import "../assets/css/bio.css";
import { Col, Row } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/icons8-facebook-50.png"
import lk from "./static_images/icons8-link-49.png"

function Bio({dataUser}) {
    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img style={{borderRadius:"50%", maxHeight:"100px", maxWidth:"100px"}} src={avatar} />
            </Col>
            </Row>            
            <h3 className="username mt10">{`${dataUser.firstName} ${dataUser.lastName}`}</h3>
            <p className="introInfo mt10">{dataUser.bio}</p>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                <img src={fb} height="25px" width="25px"/>
                </Col>
                <Col className="col-sm-auto">
                <img src={lk} height="25px" width="25px"/>
                </Col>
                <Col className="col-sm-auto">
                <img src={fb} height="25px" width="25px"/>
                </Col>
                <Col className="col-sm-auto">
                <img src={lk} height="25px" width="25px"/>
                </Col>
            </Row>
        </Col>
    );
}
export default Bio;
