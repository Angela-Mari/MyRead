import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadUser } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Categories.css";
import Bio from "./Bio";

function Categories({ categories, loadUser, auth: { user }, params }) {
    useEffect(() => {
        console.log("updating categories...");
        loadUser();
    }, [categories]);

    const MyCategories = ({ categories }) =>
        categories.length != 0 ? (
            <div className="d-grid gap-2">
                {categories.map((category, idx) => (
                    <Link key={idx} className="category-link text-secondary" to={`/blog/${user.alias}/category/${category}`}>
                        <Button variant="light" className="category-btn" block key={idx}>
                            {category}
                        </Button>
                    </Link>
                ))}
            </div>
        ) : (
            <div>You have no categories yet!</div>
        );

    return (
        <Col xs={2} md={2} className="sidebar">
            <Bio params={params}></Bio>
            <h2>Categories</h2>
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

export default connect(mapStateToProps, { loadUser })(Categories);
