import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../data/horror.json'
import SingleCard from './SingleCard';

const LastRelase = () =>{
    return(

        <Container>
        <Row>
            <Col className='d-flex flex-wrap gap-3'>
                {books.map((book) => {
                    return(
                        <SingleCard
                            key={book.asin}
                            img={book.img}
                            title={book.title}
                            price={book.price}
                            btnTitle="Vai al prodotto"
                        />
                    )
                })}
            </Col>
        </Row>
    </Container>

    )
}
export default LastRelase