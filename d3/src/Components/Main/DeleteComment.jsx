import React, { useState } from "react";
import { Button } from 'react-bootstrap';

const DeleteComment = ({ getMethod , asin }) => {
    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('')



    const DeleteComment = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM',
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