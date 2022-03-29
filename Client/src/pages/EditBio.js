import React, {useEffect, useState} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import { addPost } from "../actions/post";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loadUser, updateUser, uploadProfilePicture} from '../actions/auth';
import {useHistory} from 'react-router';
import validator from 'validator';
import CreatableSelect from 'react-select/creatable';
import avatar from "../components/static_images/anonymous-avatar-icon-25.jpg";

function EditBio({isAuthenticated, updateUser, uploadProfilePicture, auth: { user }}){
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({})
    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState(null);
    
    const findFormErrors = () => {
        const newErrors = {}

        if (formData.bio.length === 0){
            newErrors.bio = "Bio must be at least one character."
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
    
    const [formData, setFormData] = useState({
    bio: isAuthenticated? user.bio : "",
    facebook: '',
    instagram: '',
    other: ''
    });

    async function submit(event){
        event.preventDefault();
        if (validate()){

            var getUrl = window.location;
            var blogUrl = getUrl .protocol + "//" + getUrl.host + "/" + "blog/" + user.alias;
            await uploadProfilePicture(images[0], 1);
            await updateUser(formData.bio, formData.socials)
            history.push(`/blog/${user.alias}`);
        }
    }

    function onImageChange(e){
        setImages([e.target.files[0]])
        const url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
    }

    return(
        <>
        {
            isAuthenticated ? 
            <Container>
                <h2>Edit {user.firstName} {user.lastName}'s Profile</h2>
                <Form>
                    <Form.Group>
                        <Row style={{marginTop:"0.5rem"}}><Form.Label>Upload Picture</Form.Label></Row>
                        <Col>
                            <img style={{borderRadius:"50%", height:"100px", width:"100px", objectFit:"cover", marginBottom:"1rem"}} src = {preview != null? preview : avatar} />
                        </Col>
                            <input type="file" accept="image/*" onChange={onImageChange} />
                    </Form.Group>
                    <Form.Group style={{marginTop:"0.5rem"}}>
                        <Form.Label>Edit Bio</Form.Label>
                        <Form.Control name="bio" value={formData.bio} as="textarea" placeholder="Enter Bio" onChange={(e) => setFormData(formData => ({...formData, bio: e.target.value}))} isInvalid={!!errors.bio }/>
                        <Form.Control.Feedback type="invalid">{errors.bio}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group style={{marginTop:"0.5rem"}}>
                        <Form.Label>Instagram Link</Form.Label>
                        <Form.Control name="url" value={formData.url} type="url" placeholder="Enter URL" onChange={(e) => setFormData(formData => ({...formData, instagram: e.target.value}))}  isInvalid={ !!errors.url }/>
                        <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group style={{marginTop:"0.5rem"}}>
                        <Form.Label>Facebook Link</Form.Label>
                        <Form.Control name="url" value={formData.url} type="url" placeholder="Enter URL" onChange={(e) => setFormData(formData => ({...formData, facebook: e.target.value}))}  isInvalid={ !!errors.url }/>
                        <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group style={{marginTop:"0.5rem"}}>
                        <Form.Label>Other Link</Form.Label>
                        <Form.Control name="url" value={formData.url} type="url" placeholder="Enter URL" onChange={(e) => setFormData(formData => ({...formData, url: e.target.value}))}  isInvalid={ !!errors.url }/>
                        <Form.Control.Feedback type="invalid">{errors.url}</Form.Control.Feedback>
                    </Form.Group>
                    <Button style={{marginTop:"0.5rem"}} className="rounded-pill" type = "primary" onClick={e => submit(e)}>Save Changes</Button>
                    <Button style={{marginTop:"0.5rem"}} className="rounded-pill" type = "primary" onClick={e => submit(e)}>Cancel</Button>
                </Form>
            </Container>
            :
            <h1>You must be authenticated to edit your profile. Sign up or Login here.</h1>
        }
        </>
    )
}

EditBio.propTypes = {
    updateUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    uploadProfilePicture: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });


export default connect(mapStateToProps,{loadUser, updateUser, uploadProfilePicture})(EditBio);