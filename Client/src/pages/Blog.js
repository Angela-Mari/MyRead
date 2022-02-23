import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Categories from "../components/Categories";
import RecentPosts from "../components/RecentPosts";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser, getAllUsers } from '../actions/auth';
import "./Blog.css";
import { useLocation } from 'react-router-dom'
import background from './Carousel/pexels-jess-loiterton-4319752.jpg'

function Blog({isAuthenticated, auth:{user}, getAllUsers}) {
    console.log("in blog")
    let { username } = useParams();
    const [dataUser, setDataUser] = useState({});
    const [show, setShow] = useState(false);
    const location = useLocation();

    useEffect(() => {

        console.log("in use effect blog")
        if (isAuthenticated){
            loadUser()
            if ( username == user.alias ){
                setDataUser(user)
                setShow(true);
            }
            else {
                getAllUsers().then(res => {
                    res.forEach(element => {
                        if (element.alias === username){
                            setDataUser(element);
                        }
                    });
                    setShow(true);
                }) //todo filter for actual user
            }
            
        }
        else{
            getAllUsers().then(res => {
                res.forEach(element => {
                    if (element.alias === username){
                        setDataUser(element);
                    }
                });
                setShow(true);
            }) //todo filter for actual user
        }
    }, [])


    return (
        <>
            <Container fluid={true} style={{backgroundColor:"whiteSmoke"}} >
                <Row >
                    <h1 className="my-header">{dataUser.alias}'s Blog</h1>
                    {show && <Categories dataUser={dataUser}></Categories>}
                    {show && <RecentPosts dataUser={dataUser}></RecentPosts>}
                </Row>
            </Container>
        </>
    );
}

Blog.propTypes = {
    getAllUsers: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps,{loadUser, getAllUsers})(Blog);
