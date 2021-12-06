import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadUser } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./Categories.css";

function Categories({ addCategory, auth: { user } }) {

    const MyCategories = ({ categories }) => (
        categories.length != 0?
        <div className="d-grid gap-2">
            {categories.map((category) => (
                <Link key={category.id} className="category-link text-secondary" to={`/blog/${user.alias}/category/${category.name}`}>
                        <Button variant="light" className="category-btn" block key={category.id}>
                            {category}
                        </Button>
                </Link>
            ))}
        </div>
        :
        <div>
            You have no categories yet!
        </div>
    );

    return (
        <Col xs={2} md={2} className="sidebar">
            <h2 >Categories</h2>
            <Col>
            <MyCategories categories={user.categories} />
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


export default connect(mapStateToProps,{loadUser})(Categories);
