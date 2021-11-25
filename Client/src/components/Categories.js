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
        <div className="d-grid  categories gap-2">
            {categories.map((category) => (
                <Link key={category.id} className="category-link text-secondary" to={`/${username}/category/${category.name}`}>
                    <Row>
                        <Button variant="light" className="category-btn" key={category.id}>
                            {category.name}
                        </Button>
                    </Row>
                </Link>
            ))}
        </div>
    );

    return (
        <Col xs={2} md={2}>
            <h2>Categories</h2>
            <MyCategories categories={backendData} />
        </Col>
    );
}

export default Categories;
