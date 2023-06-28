import { useState } from 'react';

import { Button, ListGroup, Modal, Form } from "react-bootstrap";


const ModificaComment = ({ getMethod, comment }) => {

    const [commentValue, setCommentValue] = useState(comment.comment);
    const [rateValue, setRateValue] = useState(comment.rate);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleCommentModal = () => {
        setModalVisible(!modalVisible);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();




        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: commentValue, rate: rateValue})
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            } else {
                toggleCommentModal();
                getMethod();
            }



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {modalVisible && (
                <div
                    className="modal show ModificaCommentModal"
                    style={{ display: 'block' }}
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Modifica Commenti</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <Modal.Body>
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


                                    <Button className='ms-2 text-light' type='submit' variant="outline-success bg-primary">Modifica Commenti</Button>
                                </Form>



                            </Modal.Body>



                        </Modal.Body>





                    </Modal.Dialog>
                </div>

            )}

            <Button onClick={toggleCommentModal} className="text-dark" variant=" bg-warning">modifica </Button>


        </>

    )

}

export default ModificaComment