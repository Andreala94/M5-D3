import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentModal from './CommentModalArea'
import CommentBook from "./CommentBook";
import './SingleCard.css';
import { Link } from "react-router-dom";


const SingleCard = ({ img, asin, title, price, category, setIdCommenti, idCommenti }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [buttonBorder, setButtonBorder] = useState(false);

    const toggleBorder = () =>{
        console.log('button border:'+ buttonBorder);
        setButtonBorder(!buttonBorder);
        console.log('button border:'+ buttonBorder);
    }

    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }

    const toggleCommenti = () => {
        
        setIdCommenti(asin);
    }
   
    const allToggle = () =>{
        toggleBorder();
        toggleCommenti();
    }

    
    useEffect(() => {
        console.log('button border ue:'+ buttonBorder);
   

    }, [buttonBorder]);

    return (
        
        <>
 
            <Card style={{ width: '13rem',  }} className={buttonBorder ? "border-danger" : ""} onClick={toggleBorder} >
                <Card.Img className="h-75" variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>€ {price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    
                    {/* <Button onClick={toggleCommentModal}  variant="primary ">Commenti</Button> */}
                    <Link to={`/book/${asin}`}>  
                    <Button className="mt-2">Dettagli</Button>
                    </Link>
                    <Button onClick={allToggle}  variant="primary ">Commenti</Button>
                   
                </Card.Body>
            </Card>
            {modalVisible && (
                <CommentModal asin={asin} close={toggleCommentModal} />
            )}
        </>
    )
}

export default SingleCard
