import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Row, Button, Container } from "react-bootstrap";
import "../assets/css/setting.css";



import "./Settings.css";

function Setting() {

    const [isshowpay, setisshowpay] = useState(false);
    const paypalparams = {
        /*  Please enter your own clent-ID   
            Create your app in the paypal console and go to the client-ID  choose live create app
            https://developer.paypal.com/developer/applications
        */
        // xxxxxxxxxxxxxxe
        "client-id": "xxxxxxxxxxxxxxxx",
    };
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    const payshow = () => {
        setisshowpay(true);
    };

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
                <Button variant="primary" onClick={payshow}>
                    Upgrade to Premium
                    <form action="https://www.paypal.com/donate" method="post" target="_top" className="form">
                        <input type="hidden" name="business" value="NNKY4D87YRFZC" />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input
                            type="image"
                            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                            border="0"
                            name="submit"
                            title="PayPal - The safer, easier way to pay online!"
                            alt="Donate with PayPal button"
                        />
                    </form>
                </Button>
                {/* {isshowpay && (
                    <Button variant="primary" className="paybut">
                        <PayPalScriptProvider options={paypalparams}>
                            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
                        </PayPalScriptProvider>
                    </Button>
                )} */}
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
