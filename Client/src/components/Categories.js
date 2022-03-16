import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadUser } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Categories.css";
import Bio from "../components/Bio";
import { useHistory } from "react-router-dom";

function Categories({dataUser, setCategory, setUpdatePosts}) {

    let history = useHistory();

    function handleClick(e) {
        console.log(e.target.name)
        setCategory(e.target.name)
        setUpdatePosts({})
        history.push(`/blog/${dataUser.alias}/category/${e.target.name}`)    
      }

    const MyCategories = ({ categories }) => (
        categories.length !== 0?
        <div className="d-grid gap-2">
            {categories.map((category, idx) => (
                // <Link key={idx} className="category-link text-secondary" to={`/blog/${dataUser.alias}/category/${category}`}>
                        <Button onClick = {e => handleClick(e)} name= {category} style={{width:"100%"}} variant="light" className="category-btn" key={idx}>
                            {category}
                        </Button>
                // </Link>
                ))}
            </div>
        : 
            <div>You have no categories yet!</div>
    )

    

    return (
        <Col xs={3} md={3} className="sidebar">
            <h2>About the Curator</h2>
            <Bio dataUser={dataUser}></Bio>
            <h2>Categories</h2>
            <Col>
            <MyCategories categories={dataUser !== undefined && dataUser.categories !== undefined? dataUser.categories : []}/>
            </Col>
        </Col>
    );
}

Categories.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Categories);
