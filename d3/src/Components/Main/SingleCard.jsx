import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentModal from './CommentModalArea'


const SingleCard = ({ img, asin, title, price, category }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }
    console.log("asin:"+ asin);
    return (
        
        <>

            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    <Card.Title>{asin}</Card.Title>
                    <Button onClick={toggleCommentModal} variant="primary">Commenti</Button>
                </Card.Body>
            </Card>
            {modalVisible && (
                <CommentModal asin={asin} close={toggleCommentModal} />
            )}
        </>
    )
}

export default SingleCard
