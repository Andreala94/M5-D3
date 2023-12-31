import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const DeleteComment = ({ getMethod , asin }) => { //Passiamo come props l'id del libro(asin) e la funzione getMethod

    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('')

    //Creaiamo la funzione del DELETE dei commenti 

    const DeleteComment = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODg3NTU1NTUsImV4cCI6MTY4OTk2NTE1NX0.CmklpVOu5RF7aVkH6jkcu-rAg_KmVAXK_1qr1aJy1kM',
                    'Content-Type': 'application/json'
                },
               
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            } else {
                getMethod();
            }



        } catch (error) {
            console.log(error);
        }
    }

    return (
          <Button onClick={ DeleteComment} className="text-dark me-2 fw-bold mt-2"  variant=" bg-danger">Delete </Button>
   )

}

export default DeleteComment