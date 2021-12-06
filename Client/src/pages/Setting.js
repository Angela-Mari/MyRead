import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import "../assets/css/setting.css";
import "./Settings.css"
function Setting() {
    return (
        <Container fluid={true}>
                <Row>
                    <h2 className="my-title">Settings</h2>
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
