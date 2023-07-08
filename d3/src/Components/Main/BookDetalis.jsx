import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


export const BookDetalis = ({ img, title, price, category }) => {

    const { bookid } = useParams(); // stiamo prendendo il paramento cioè asin
    const [book, setBook] = useState(null);
    console.log(book);


    const getBookDetail = async () => {
        try {
            const data = await fetch(`https://epibooks.onrender.com/${bookid}`)
            const response = await data.json();
            setBook(response);
            console.log(response.title);
            console.log(response.price);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBookDetail()
    }, [bookid]);


    return (
        <div>
            <h1>Stai navigando sul libro {bookid}</h1>

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>€ {price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>





        </div>
    )
}
