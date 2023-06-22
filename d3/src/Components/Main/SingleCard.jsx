import React from "react";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({ img, title, price, btnTitle }) => {
    return (

        <Card 
        // className={ 'border border border-danger shadow-lg'}
         style={{ width: '18rem' }}
    >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{price}</Card.Title>
            <Button variant="primary">{btnTitle}</Button>
        </Card.Body>
    </Card>
    )
}

export default SingleCard
