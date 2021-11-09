import { Button, Col, Row, Container, Navbar } from "react-bootstrap";
import AuthenticationModal from "./components/AuthenticationModal";
import React, { useState } from "react";
import Blog from "./pages/Blog";
import TwoFAModal from "./components/TwoFAModal";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./assets/css/bootstrap.min.css";

export default function App() {
    const [show, setShow] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [alias, setAlias] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [twoFA, setTwoFA] = useState(false);
    const [pin, setPin] = useState("");

    function handleSubmit(e) {
        // send to backend??
        // get username from backend
        setShow(false);
        console.log(firstName);
        console.log(lastName);
        console.log(alias);
        console.log(phoneNumber);
        console.log(email);
        console.log(password);
        setTwoFA(true);
    }

    function handle2FASubmit() {
        setLoggedIn(true);
    }
    return (
        <Container>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        {loggedIn ? (
                            <Redirect to={`/${alias}`} />
                        ) : (
                            <Home
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                firstName={firstName}
                                setFirstName={setFirstName}
                                lastName={lastName}
                                setLastName={setLastName}
                                alias={alias}
                                setAlias={setAlias}
                                phoneNumber={phoneNumber}
                                setPhoneNumber={setPhoneNumber}
                                handleSubmit={handleSubmit}
                                pin={pin}
                                setPin={setPin}
                                handle2FASubmit={handle2FASubmit}
                                twoFA={twoFA}
                                setTwoFA={setTwoFA}
                                show={show}
                                setShow={setShow}
                            />
                        )}
                    </Route>
                    <Route exact path="/:username">
                        <Blog />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

function Home({ email, setEmail, password, setPassword, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, handleSubmit, pin, setPin, handle2FASubmit, twoFA, setTwoFA, show, setShow }) {
    console.log("home:", twoFA);

    function handleClose() {
        setShow(false);
        setTwoFA(false);
    }

    function handleClick(name) {
        console.log(name);
        setAuthentication(name);
        setShow(true);
    }

    const [authentication, setAuthentication] = useState("Register");

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="text-center">
                    <h1>Welcome to MyRead</h1>
                    <p>Register or log in to get started.</p>
                    <Button variant="primary" name="Register" onClick={(e) => handleClick(e.currentTarget.name)}>
                        Register
                    </Button>{" "}
                    <Button variant="primary" name="Log in" onClick={(e) => handleClick(e.currentTarget.name)}>
                        Log in
                    </Button>
                    <AuthenticationModal
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        show={show}
                        handleClose={handleClose}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        alias={alias}
                        setAlias={setAlias}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        handleSubmit={handleSubmit}
                        type={authentication}
                    ></AuthenticationModal>
                    <TwoFAModal pin={pin} setPin={setPin} handleTwoFA={handle2FASubmit} show={twoFA} handleClose={handleClose}></TwoFAModal>
                </Col>
                <Navbar fixed="bottom">
                    <Container>Your own blog in seconds.</Container>
                </Navbar>
            </Row>
        </Container>
    );
}
