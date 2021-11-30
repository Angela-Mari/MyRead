import { Modal, Button, Form} from 'react-bootstrap';
import React from 'react';

function TwoFAModal({pin, setPin, handleTwoFA, show, handleClose}) {
 
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
           Verify With Two Factor Authentication
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="pin">
                <Form.Label>pin</Form.Label>
                <Form.Control value={pin} onChange={(e) => setPin(e.currentTarget.value)} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={(e)=>handleTwoFA(e.currentTarget)}>
                Submit
            </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default TwoFAModal
