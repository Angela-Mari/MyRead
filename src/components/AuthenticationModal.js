import { Modal, Button, Form, Row, Col, Accordion} from 'react-bootstrap';
import React from 'react';

function AuthenticationModal({show, handleClose, type, email, password, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, setEmail, setPassword, handleSubmit}) {
 
    return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show} 
        onHide={handleClose}
        centered
        animation={false}
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           {type}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="mb-2">
            <Button size="sm">{type} with Facebook</Button>
            </div>
            <div>
            <Button size="sm">{type} with Google</Button>
            </div>
            <Form>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="firstName">
                    {type === "Register"? 
                    <>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
                    </>
                    : <></> }
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="lastName">
                    {type === "Register"? 
                    <>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
                    </>
                    : <></> }
                </Form.Group>
                </Col>
                </Row>
                <Form.Group className="mb-3" controlId="alias">
                    {type === "Register"? 
                    <>
                    <Form.Label>Blog Name</Form.Label>
                    <Form.Control value={alias} onChange={(e) => setAlias(e.currentTarget.value)} />
                    </>
                    : <></> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    {type === "Register"? 
                    <>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.currentTarget.value)} />
                    </>
                    : <></> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} />
                </Form.Group>

                

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {type === "Register"? 
                    <>
                    <Accordion>
                        <Accordion.Header>Privacy Policy</Accordion.Header>
                            <Accordion.Body>
                                    <h3>What We Collect</h3>
                                    We collect and store your name, email, and phone number to authenticate you. We do not share these items with any third parties.
                                    <h3>Contact Us</h3>
                                    You may contact us with questions regarding the use of your name, email, and phone number at /contact
                            </Accordion.Body>
                    </Accordion>
                    <Form.Check type="checkbox" label="I have read the Privacy Policy and I accept the terms and conditions."/>
                    </>
                     : <></> }
                </Form.Group>

                <Button variant="primary" type="button" onClick={(e)=>handleSubmit(e.currentTarget)}>
                {type === "Register"? "Next" : "Log in"}
                </Button>
                
                </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default AuthenticationModal