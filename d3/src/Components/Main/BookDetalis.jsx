import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const BookDetalis = () => {
    const { bookid } = useParams(); // stiamo prendendo il paramento cioè asin
    const [book, setBook] = useState(null);
console.log(book);


    const getBookDetail = async () => {
        try {
            const data = await fetch(`https://epibooks.onrender.com/${bookid}`)
            const response = await data.json();
            setBook(response);
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


        </div>
    )
}
