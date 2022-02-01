import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import "../assets/css/setting.css";
import "./Settings.css"
// const config = require('config');


function Setting() {

    // const payPalClientID = config.get('paypalClientID'); //FOR LOCALHOST
    // const payPalClientID = process.env.PAYPAL_CLIENT_ID; //FOR HEROKU

    return (
        <Container fluid={true} style={{marginLeft:"0.5rem"}}>
                <Row>
                    <h1 className="my-title">Settings</h1>
                </Row>
                <Row className="line">
                    <h2>Privacy</h2>
                    <p>Your profile is public, toggle to change.</p>
                    <p>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </p>
                </Row>
                <Row className="line">
                    <h2>Payment</h2>
                    <p>Your are on the free tier.</p>
                    <Button variant="primary">Upgrade to Premium</Button>
                </Row>
                <Row className="line">
                    <h2>Delete Account</h2>
                    <p>Permanatley delete account and lose all saved posts?</p>
                    <Button variant="primary">Delete Account</Button>
                </Row>
        </Container>
    );
}

export default Setting;
