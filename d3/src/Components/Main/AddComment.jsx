import { useState, useEffect} from 'react';
import {  Form,  Button } from 'react-bootstrap';



const AddComment = ({ getMethod , asin }) => {

    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('');
    


    const handleSubmit = async (event) => {
        event.preventDefault();

        setCommentValue(event.target.value);
        setRateValue(event.target.value);
        


        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: commentValue, rate: rateValue,  elementId: asin})
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }else {
                getMethod();
            }



        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
        
        <Form className="d-flex " onSubmit={handleSubmit}>

        
            <Form.Control
                className='me-1  border-dark h-50 mt-3 '
                value={commentValue}
                type="text"
                onChange={(event) => setCommentValue(event.target.value)}
            />
            
            <Form.Control
                className='me-1  border-dark h-50 mt-3'
                value={rateValue}
                type="text"
                onChange={(event) => setRateValue(event.target.value)}

            />
            
           
            <Button id='commenti' className='ms-2 text-light ' type='submit' >Add Commenti</Button>
        </Form>
       </>
    );

    
}

export default AddComment;