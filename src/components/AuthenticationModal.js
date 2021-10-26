import { Modal, Button, Form} from 'react-bootstrap';
import React from 'react';

function AuthenticationModal({show, handleClose, type, email, password, setEmail, setPassword, handleSubmit}) {
 
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
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {type === "Register"? <Form.Check type="checkbox" label="I accept the terms and conditions"/> : <></> }
                </Form.Group>

                <Button variant="primary" type="button" onClick={(e)=>handleSubmit(e.currentTarget)}>
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