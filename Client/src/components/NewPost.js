import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap";
import { addPost } from "../actions/post";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCategory, loadUser } from '../actions/auth';
import {useHistory} from 'react-router';
import validator from 'validator';
import CreatableSelect from 'react-select/creatable';

import "./NewPost.css";

function NewPost({addPost, addCategory, isAuthenticated, auth: { user }}){
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({})
    const [selectedOptions, setSelectedOptions] = useState([])

    // on submit updateFormData inside useEffect dependent on cahnges from my values
    const findFormErrors = () => {
        const newErrors = {}
        // keywords errors
        console.log("reading title: "+ formData.title)
        if ( formData.title.length === 0) {
        newErrors.title = "Post must have a title."
        }
        if ( formData.url.length === 0 ){
            newErrors.url = "URL cannot be blank."
        }

        console.log("category: " + formData.category)
        if (formData.category.length === 0){
            newErrors.category = "Please select a category or create a new one."
        }

        console.log("validating url: " + formData.url)
        
        if (!validator.isURL(formData.url)){
            newErrors.url = "Invalid URL."
        }

        return newErrors
    }

    function validate(){
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

    const options = user.categories.length !== 0? user.categories.map(category => ({value: category, label: category})): [];
    
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: '',
    });

    function handleSelections(newOption) {  
        console.log("setting options...")
        console.log(newOption !== undefined && newOption.length != 0 ? newOption[0].value : "")
        setSelectedOptions(selectedOptions => [...selectedOptions, newOption]);
        setFormData(formData => ({...formData, category: newOption != undefined && newOption.length !== 0 ? newOption[0].value : ""}))
    }

    async function submit(event){
        event.preventDefault();
        if (validate()){
            var validForm = formData
            if (!formData.url.includes('www.')){
                console.log("adding www.")
                validForm.url = "www." + validForm.url
            }
            if (validForm.url.startsWith('www')){
                console.log("adding http://")
                validForm.url = "http://" + validForm.url
            }
            if (!user.categories.includes(validForm.category)){
                await addCategory(validForm.category)
            }
            
            console.log(validForm)
            await addPost(validForm);
            history.push(`/blog/${user.alias}`);
        }
 
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
                    <Form.Control name="title" value={formData.title} placeholder="Enter Title" onChange={(e) => setFormData(formData => ({...formData, title: e.target.value}))} isInvalid={ !!errors.title }/>
                    <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" value={formData.description} as="textarea" placeholder="Enter Description" onChange={(e) => setFormData(formData => ({...formData, description: e.target.value}))} />
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Link</Form.Label>
                    <Form.Control name="url" value={formData.url} type="url" placeholder="Enter URL" onChange={(e) => setFormData(formData => ({...formData, url: e.target.value}))}  isInvalid={ !!errors.url }/>
                    <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{marginTop:"0.5rem"}}>
                    <Form.Label>Category</Form.Label>
                    <CreatableSelect
                        name="category"
                        isMulti
                        options={options}
                        onChange={handleSelections}
                    />
                    <Form.Control hidden isInvalid={ !!errors.category }/>
                    <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
                </Form.Group>
                
                <Button style={{marginTop:"0.5rem"}} className="rounded-pill" type = "primary" onClick={e => submit(e)}>Save Post</Button>
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
    addCategory: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{addPost, addCategory, loadUser})(NewPost);