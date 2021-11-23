import React from "react";
import { Row, Button, Card } from "react-bootstrap";
import "../assets/css/setting.css";
function Setting() {
    return (
        <Card /* style={{ width: "18rem" }} */>
            <Card.Body>
                <Row>
                    <Card.Title>setting</Card.Title>
                </Row>
                <Row className="line">
                    <Card.Title>Privacy</Card.Title>
                    <Card.Text>Your profile is public, toggle to change.</Card.Text>
                    <Card.Text>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </Card.Text>
                </Row>
                <Row className="line">
                    <Card.Title>Payment</Card.Title>
                    <Card.Text>Your are on the free tier.</Card.Text>
                    <Button variant="primary">upgrade to prelmum</Button>
                </Row>
                <Row className="line">
                    <Card.Title>Delete Account</Card.Title>
                    <Card.Text>Permanatley delete account and lose all saved posts?</Card.Text>
                    <Button variant="primary">Delete Account</Button>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Setting;
/* 

        {/* <div className="seting">
            <div className="title">setting</div>
            <Row className="line">
                <div>Privacy</div>
                <div>Your profile is public, toggle to change.</div>
                <Row>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </Row>
            </Row>
            <Row className="line">
                <div>privacy</div>
                <div>You are on the free tier.</div>
                <Button variant="primary">uisqede to PrernitIn</Button>
            </Row>
            <Row className="line">
                <div>Delete Account</div>
                <div></div>
                <Button variant="primary">Delete Account</Button>
            </Row>  </div>*/
