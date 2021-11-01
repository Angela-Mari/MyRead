import React from 'react';
import { Col,Row,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Categories({username}) {

    const backendData = [
        {
            id: 1,
            name: "Recipes"
        }, 
        {
            id: 2, 
            name: "Computer Science"
        }, 
        {
            id: 3, 
            name: "Read Later"
        }
    ]
    
    
    const MyCategories = ({categories}) => (
        <div>
          {categories.map(category => (
            <Row key={category.id}>
                <Link to={`/${username}/category/${category.name}`}>{category.name}</Link>
            </Row>
          ))}
        </div>
      ); 

    return(
    <Col >
    <h2>Categories</h2>
       <MyCategories categories={backendData} />
    </Col>
    )
}



export default Categories;