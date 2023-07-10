import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentModal from './CommentModalArea'
import CommentBook from "./CommentBook";
import './SingleCard.css';
import { Link } from "react-router-dom";

//Creaiamo il componente Card e gli passiamo nella funzione le props che ci servono
const SingleCard = ({ img, asin, title, price, category, setIdCommenti, idCommenti }) => {

    
    const [modalVisible, setModalVisible] = useState(false);
    const [buttonBorder, setButtonBorder] = useState(false);
    
    // Funzione per il bordo del libro
    const toggleBorder = () =>{
        console.log('button border:'+ buttonBorder);

        setButtonBorder(!buttonBorder);

       
    }
    //Funzione per il modale dei commenti che per adesso in questo esercizio l'ho abbiamo escluso
    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }
    //Funzione per richiamare i commenti
    const toggleCommenti = () => {
        
        setIdCommenti(asin);
    }
   //Richiamo le due funzione per visualizzare i commenti e per il bordo della card
    const allToggle = () =>{
        toggleCommenti()
        toggleBorder();
        
    }

    
    useEffect(() => {
        console.log('button border 2 :'+ buttonBorder);
   

    }, [buttonBorder]);

    return (
        
        <>
            {/*Crad dove gli passiamo le props messe in fuonzione per avere i dettagli cge ci servono creando la card con immagine
            titolo prezzo e categoria. Creiamo un bottone con collegamento ad una pagine esterna per i dettagli del libbro e un bottone 
            per i commenti da visualizzare nell'Area Commenti  */}
            
            <Card style={{ width: '13rem',  }} className={buttonBorder ? "border-danger" : ""} >
                <Card.Img className="h-75" variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>€ {price}</Card.Title>
                    <Card.Title>{category}</Card.Title>
                    
                    {/* <Button onClick={toggleCommentModal}  variant="primary ">Commenti</Button> */}
                    <Link to={`/book/${asin}`}>  
                    <Button className="mt-2">Dettagli</Button>
                    </Link>
                    <Button className="mt-1" onClick={toggleCommenti}  variant="primary ">Commenti</Button>
                   
                </Card.Body>
            </Card>
            {modalVisible && (
                <CommentModal asin={asin} close={toggleCommentModal} />
            )}
        </>
    )
}

export default SingleCard
