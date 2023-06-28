import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import books from '../data/horror.json'
import SingleCard from './SingleCard';

const LastRelase = ({ books }) => {


    

    return (
       
        <Container>
            <Row>
                <Col className='d-flex flex-wrap gap-3'>
                   
                    {
                    books.map((book) => {
                        return (
                            <SingleCard
                                key={book.asin}
                                asin={book.asin}
                                img={book.img}
                                title={book.title}
                                price={book.price}
                                category={book.category}

                            />
                        )
                    })}
                </Col>
            </Row>
        </Container>

    )
}
export default LastRelase