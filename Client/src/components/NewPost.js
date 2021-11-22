import React, {useState} from "react";
import {Container, Form} from "react-bootstrap"
function NewPost({isAuthenticated}){
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    const [selectedOptions, setSelectedOptions] = useState([])
    handleChange = (newOption) => {
        setSelectedOptions(selectedOptions => [...selectedOptions, newOption]);
        console.log(`Option selected:`, newOption);
      };

    return(
        <>
        {
            isAuthenticated ?
            <Container>
                <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter Title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Description" />
                </Form.Group>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
                
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>image upload</Form.Label>
                    <Form.Control type="image" size="sm" />
                </Form.Group>
                </Form>
            </Container>
            :
            <h1>You must be authenticated to create a new post. Sign up or Login here.</h1>
        }
        </>
    )
}

export default NewPost