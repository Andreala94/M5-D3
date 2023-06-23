import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import books from '../data/horror.json'
import SingleCard from './SingleCard';

const LastRelase = () => {
   
 
   const [books, setBooks] = useState([]);

    const getBooksApi = async () => {
        try {

            const data = await fetch ('https://epibooks.onrender.com/')
            
            
            const response = await data.json();
			setBooks(response);
             


        } catch (error) {

        }
    }
    
    useEffect(() => {
		getBooksApi();
	}, []);

    return (

        <Container>
            <Row>
                <Col className='d-flex flex-wrap gap-3'>
                    {books.map((book) => {
                        return (
                            <SingleCard
                                key={book.asin}
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