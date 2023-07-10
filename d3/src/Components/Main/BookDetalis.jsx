import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';


export const BookDetalis = ({ img, title, price, category }) => {

    const { bookid } = useParams(); // stiamo prendendo il paramento cioè asin
    const [book, setBook] = useState(null);
    console.log(book);


    const getBookDetail = async () => {
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookid}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODg3NTU1NTUsImV4cCI6MTY4OTk2NTE1NX0.CmklpVOu5RF7aVkH6jkcu-rAg_KmVAXK_1qr1aJy1kM'
                }

            })

            const response = await data.json();
            setBook(response);
            console.log(response.title);
            console.log(response.price);
        } catch (error) {
            console.log(error);
        }
    }

   


    return (
        <div>
            <>
            <NavBar />
            <h1>Stai navigando sul libro {bookid}</h1>

            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Title>€ {book.price}</Card.Title>
                    <Card.Title>{book.category}</Card.Title>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>

        </>
        </div>
    )
}
