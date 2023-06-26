import { useState } from 'react';
import { InputGroup, Form, Row, Col, Button} from 'react-bootstrap';


const AddComment = ({asin}) => {
    const [CommentValue, setCommentValue] = useState('');
    const [RateValue, setRateValue] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        setCommentValue(event.target.value);
        console.log(event.target.value);
        console.log(RateValue);
        console.log(CommentValue);
      
      
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({comment:CommentValue, rate: RateValue })
        });
  
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
  
        // Puoi gestire la risposta qui se necessario
  
      } catch (error) {
        // Gestisci l'errore qui
      }
    };
  
    return (
      
        // <p className='mb-0'>Commento:</p>
       
    //    <p className='mb-0'>Voto:</p>
    //    <input type="text" value={inputValue}  />
    //     <button type="submit">Invia Dati</button>
    //   </form>



<Form className="d-flex" onSubmit={handleSubmit}>

<Form.Control 
  
  ovalue={CommentValue}
  type="text"
  
/>
<Form.Control 
  
  ovalue={RateValue}
  type="text"
//   onChange={setRateValue()}
  
/>
<Button className='ms-2' type='submit' variant="outline-success bg-info">Cerca</Button>
</Form>
    );
  
  



    // return (
        
    //         <Row>
    //             <Col />
    //             <InputGroup className="mb-3">
    //                 <InputGroup.Text>Aggiungi Commento e Voto</InputGroup.Text>
    //                 <Form.Control aria-label="Commento" />
    //                 <Form.Control className=" w-20" aria-label="Voto" />
    //             </InputGroup>
    //             <Col />
    //         </Row>
        

    // )
}

export default AddComment;