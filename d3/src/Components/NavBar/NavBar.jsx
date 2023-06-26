import React, {  useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = ({ books, setBooks, getBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterBooks = (e) => {
    
    e.preventDefault();

    const filterBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setBooks(filterBooks);
  };

  const handleResetSearchBar = (value) => {
    if (value === "") {
      getBooks();
    }

    setSearchTerm(value);
  };

 

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid className='mx-0'>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={filterBooks}>

          <Form.Control 
            
            onChange={(e) => handleResetSearchBar(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <Button className='ms-2' type='submit' variant="outline-success bg-info">Cerca</Button>
        </Form>

      </Container>
    </Navbar>
  );
}

export default NavBar;