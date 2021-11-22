import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap"
import Select from "react-select"
import { addPost } from "../actions/post"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/auth';

function NewPost({addPost, isAuthenticated}){
    
    const options = [ //get from backend
        { value: 'new reads', label: 'New Reads' },
        { value: 'cs', label: 'Computer Science' },
        { value: 'helpful tips', label: 'Helpful Tips' },
      ];

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [selectedOptions, setSelectedOptions] = useState([])
    function handleChange(newOption) {
        setSelectedOptions(selectedOptions => [...selectedOptions, newOption]);
    }

    async function submit(event){
        event.preventDefault();
        console.log(title, description, url, selectedOptions)
        await addPost(title, description, selectedOptions, url)
    }

    return(
        <>
        {
            true ? 
            <Container>
                <h2>Create a New Post</h2>
                <Form>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Enter Title" onChange={e => setTitle(e.value)}/>
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Description" onChange={e => setDescription(e.value)}/>
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Link</Form.Label>
                    <Form.Control type="url" placeholder="Enter URL" onChange={e => setUrl(e.value)}/>
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Category</Form.Label>
                    <Select
                        isMulti
                        onChange={handleChange}
                        options={options}
                    />
                </Form.Group>
                
                <Button style={{marginTop:"0.5rem"}}type = "primary" onClick={e => submit(e)}>Save Post</Button>
                </Form>
            </Container>
            :
            <h1>You must be authenticated to create a new post. Sign up or Login here.</h1>
        }
        </>
    )
}

NewPost.propTypes = {
    addPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{addPost, loadUser})(NewPost);