import React from "react";
import "./Bio.css";
import { Col, Row, Button } from "react-bootstrap";
import avatar from "./static_images/anonymous-avatar-icon-25.jpg";
import fb from "./static_images/f_logo_RGB-Blue_72.png"
import { useLocation, useHistory} from 'react-router-dom';

function Bio({dataUser}) {
    
    let history = useHistory();


    return (
        <Col className = "center-block">
            <Row>
                <Col>
                <img onClick = {e=> {history.push(`/blog/${dataUser.alias}`)}} className= "bio-pic" src={dataUser.picture} />
            </Col>
            </Row>            
            <h3 style={{marginTop:"1rem"}}>{`${dataUser.firstName} ${dataUser.lastName}`}</h3>
            <p className="introInfo mt10">{dataUser.bio}</p>
            <Row className="justify-content-center">
                <Col className="col-sm-auto">
                
                <img onClick={e => {window.location.href = dataUser.socials.facebook}} src="https://img.icons8.com/plasticine/100/000000/facebook-new.png" height="60px" width="60px" className="socials"/>
              
                </Col>
                <Col className="col-sm-auto">
 
                <img onClick={e => {window.location.href = dataUser.socials.instagram}} src="https://img.icons8.com/plasticine/100/000000/instagram.png" height="60px" width="60px" className="socials"/>
        
                </Col>
                <Col className="col-sm-auto">
                <img src="https://img.icons8.com/plasticine/100/000000/link.png" height="60px" width="60px" className="socials"/>
                </Col>
                
            </Row>
        </Col>
    );
}
export default Bio;
