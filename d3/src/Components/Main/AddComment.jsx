import { useState, useEffect} from 'react';
import {  Form,  Button } from 'react-bootstrap';


const AddComment = ({ asin }) => {
    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);
        setAuthorValue(event.target.value);
        
        console.log(rateValue);
        console.log(commentValue);


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: commentValue, rate: rateValue, Author: authorValue })
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }



        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
	// 	handleSubmit();
	// }, [asin]);

    return (
       
        <Form className="d-flex" onSubmit={handleSubmit}>


            <Form.Control

                value={commentValue}
                type="text"
                onChange={(event) => setCommentValue(event.target.value)}
            />
            <Form.Control

                value={rateValue}
                type="text"
                onChange={(event) => setRateValue(event.target.value)}

            />
            
            <Form.Control

                value={authorValue}
                type="text"
                onChange={(event) => setAuthorValue(event.target.value)}

            />
            <Button className='ms-2 text-light' type='submit' variant="outline-success bg-primary">Aggiungi Commenti</Button>
        </Form>
       
    );

    
}

export default AddComment;