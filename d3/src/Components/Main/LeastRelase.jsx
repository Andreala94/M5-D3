import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from './SingleCard';
import CommentBook from "./CommentBook";
import { nanoid } from 'nanoid';


const LastRelase = ({ books }) => {

    const [idCommenti, setIdCommenti] = useState("")


    useEffect(() => {



    }, []);


    return (
        <>

            <Container className="d-flex">
                <Row>
                    <Col
                        style={{ maxHeight: "1000px" }}
                        lg={8}
                        md={8}
                        sm={6}
                        xs={6}

                        className='d-flex flex-wrap gap-3 overflow-auto'>

                        {
                            books.map((book) => {
                                return (
                                    <SingleCard
                                        key={nanoid()}
                                        asin={book.asin}
                                        img={book.img}
                                        title={book.title}
                                        price={book.price}
                                        category={book.category}
                                        setIdCommenti={setIdCommenti}
                                        idCommenti={idCommenti}
                                    />
                                )
                            })}

                    </Col>

                    <Col >
                        <p>Commenti</p>
                        <CommentBook asin={idCommenti} />

                    </Col>
                </Row>
            </Container>


        </>
    )
}
export default LastRelase