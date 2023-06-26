import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import "../Main/CommentModal.css";
import AddComment from "./AddComment";

const CommentModal = ({ close, asin }) => {
    const [bookComments, setBookComments] = useState(null);

    const getCommentModal = async () => {
        console.log("asin:"+ asin);
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk1YmQ1MzlhOGZmMDAwMTRhYjI5NmEiLCJpYXQiOjE2ODc1MzUwNTUsImV4cCI6MTY4ODc0NDY1NX0.V3RRpY9zgtDu2m4Ws3QMClXQ5h_eO4iuOQ3vxun-hhM'
                }

            })

            const response = await data.json();
            setBookComments(response)


        } catch (error) {
            console.log(error);

        }




    }
    useEffect(() => {
		getCommentModal();
	}, [asin]);

    return (
        <div
            className="modal show CommentModal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Commenti</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {bookComments &&
						bookComments.map((comment) => {
                            console.log(comment);
							return (
                                
                                <Modal.Body>
                                <ListGroup className="d-flex justify-content-between align-items-start" as="ol" numbered>
                                    {bookComments &&
                                        bookComments.map((comment) => (
                                            <ListGroup.Item key={comment.asin}>
                                                <div className="ms-2 me-auto">
                                                    <div>{comment.comment}</div>
                                                    <div>Voto: {comment.rate}</div>
                                                    <div>Autore: {comment.author}</div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                </ListGroup>
                            </Modal.Body>
                        
							);
						})}
                </Modal.Body>




                <Modal.Footer>
                    <>
                    <Button onClick={close}>Close</Button>
                    <AddComment asin={asin} />
                    </>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default CommentModal;