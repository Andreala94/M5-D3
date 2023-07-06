import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentModal from './CommentModalArea'
import CommentBook from "./CommentBook";
import './SingleCard.css';


const SingleCard = ({ img, asin, title, price, category, setIdCommenti, idCommenti }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [buttonBorder, setButtonBorder] = useState(false);

    const toggleBorder = () =>{
        setButtonBorder(!buttonBorder);
    }

    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }

    const toggleCommenti = () => {
        
        setIdCommenti(asin);
    }
   


    return (
        
        <>
 
            <Card style={{ width: '13rem',  }} className={buttonBorder ? "border-danger" : ""}  >
                <Card.Img className="h-75" variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>€ {price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    
                    {/* <Button onClick={toggleCommentModal}  variant="primary ">Commenti</Button> */}
                    <Button onClick={{toggleCommenti, toggleBorder}}   variant="primary ">Commenti</Button>
                </Card.Body>
            </Card>
            {modalVisible && (
                <CommentModal asin={asin} close={toggleCommentModal} />
            )}
        </>
    )
}

export default SingleCard
