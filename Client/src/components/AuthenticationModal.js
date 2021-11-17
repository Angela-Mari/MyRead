import { Modal, Button, Form, Row, Col, Accordion} from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import validator from 'validator';
import { ExportConfigurationInstance } from 'twilio/lib/rest/bulkexports/v1/exportConfiguration';

function AuthenticationModal({show, handleClose, type, email, password, firstName, lastName, alias, phoneNumber, setFirstName, setLastName, setAlias, setPhoneNumber, setEmail, setPassword, handleSubmit, handleGoogleSubmit}) {

    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({})
    const [checked, setChecked] = useState(false);

    const findFormErrors = () => {
        const newErrors = {}
        // keywords errors
        if ( password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long.'
        }
        if ( email.length == 0 ){
            newErrors.email = "Email cannot be blank."
        }
        if ( firstName.length == 0 ){
            newErrors.firstName = "First name cannot be blank."
        }
        if (lastName.length == 0){
            newErrors.lastName = "Last name cannot be blank."
        }
        if (alias.length == 0){
            newErrors.alias = "Alias cannot be blank or a space."
        }
        if (alias.includes(" ")){
            newErrors.alias = "Alias cannot contain a space."
        }
        if (!validator.isMobilePhone(phoneNumber)){
            newErrors.phoneNumber = "Phone number is invlaid."
        }
        if (!checked){
            newErrors.checked = "Must read and agree to privacy policy to register."
        }

        return newErrors
    }

    function validate(e){
        if (type == "Register"){
            const newErrors = findFormErrors();
        if ( Object.keys(newErrors).length > 0 ) {
            // We got errors!
            setErrors(newErrors)
            setValidated(false)
            return false
          }
          else {
            setErrors({})
            setValidated(true)
            return true
          }
        }
        return true;
    }

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

                {/* <GoogleBtn 
                handleGoogleSubmit={handleGoogleSubmit}
                />  */}

            <Form noValidate validated={validated}>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="firstName">
                    {type === "Register"? 
                    <>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={firstName} onChange={(e) => setFirstName(e.currentTarget.value.trim())} isInvalid={ !!errors.firstName }/>
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </>
                    : <></> }
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="lastName">
                    {type === "Register"? 
                    <>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lastName} onChange={(e) => setLastName(e.currentTarget.value.trim())} isInvalid={ !!errors.lastName } />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    </>
                    : <></> }
                </Form.Group>
                </Col>
                </Row>
                <Form.Group className="mb-3" controlId="alias">
                    {type === "Register"? 
                    <>
                    <Form.Label>Alias (must not include spaces)</Form.Label>
                    <Form.Control value={alias} onChange={(e) => setAlias(e.currentTarget.value.trim())} isInvalid={ !!errors.alias }/>
                    <Form.Control.Feedback type="invalid">{errors.alias}</Form.Control.Feedback>
                    </>
                    : <></> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    {type === "Register"? 
                    <>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.currentTarget.value.trim())} isInvalid={ !!errors.phoneNumber }/>
                    <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                    </>
                    : <></> }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.currentTarget.value.trim())} isInvalid={ !!errors.email }/>
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} isInvalid={ !!errors.password }/>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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
                    <Form.Check type="checkbox" label="I have read the Privacy Policy and I accept the terms and conditions." onChange = {(e) => setChecked(e.target.checked)} isInvalid={ !!errors.checked }/>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </>
                     : <></> }
                </Form.Group>

                <Button variant="primary" onClick={async (e)=> {if (validate()) {await handleSubmit(e.currentTarget); handleClose();}}}>
                    Submit
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