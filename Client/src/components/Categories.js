import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories({ username }) {
    const backendData = [
        {
            id: 1,
            name: "Recipes",
        },
        {
            id: 2,
            name: "Computer Science",
        },
        {
            id: 3,
            name: "Read Later",
        },
    ];

    const MyCategories = ({ categories }) => (
        <div className="d-grid gap-2">
            {categories.map((category) => (
                <Link key={category.id} className="category-link text-secondary" to={`/blog/${username}/category/${category.name}`}>
                        <Button variant="light" className="category-btn" block key={category.id}>
                            {category.name}
                        </Button>
                </Link>
            ))}
        </div>
    );

    return (
        <Col xs={2} md={2} className="sidebar">
            <h2 >Categories</h2>
            <Col>
            <MyCategories categories={backendData} />
            <Button variant="light" className="category-btn" style={{marginTop:"0.5rem",}} block >
            <img src="https://img.icons8.com/ios/50/000000/plus--v1.png" width="25px" height="25px"/> Add New Category
            </Button>
            </Col>
        </Col>
    );
}

export default Categories;
