import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = ({mov}) => {
   
      
  return (
    <div>
  
        <div className="info">
          <div>Name: {mov.name}</div>
          <div>Age: {mov.age}</div>
          <div>Phone: {mov.phone}</div>
          <div>Adress: {mov.adress}</div>
          <Link to={`/details/${mov.id}`}>
          <Button variant="primary">Details</Button>
          </Link>
        </div>
        
   </div>
  );
};

export default Card