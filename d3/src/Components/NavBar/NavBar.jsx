import React, { useContext, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './NavBar.css';

import { ThemeContext } from './ThemeProvider';

//Creaiamo componente NavBar con la ricerca del filtro di ogni libbro

const NavBar = ({ books, setBooks, getBooksApi }) => {

  
  const myThemeContext = useContext(ThemeContext);
  const { theme , toggleTheme} = ThemeContext;
 

  const [searchTerm, setSearchTerm] = useState("");
  
  //Creiamo la funzione per il filtro della ricerca del libbro
  const filterBooks = (e) => {

    e.preventDefault();

    const filterBooks = getBooksApi.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setBooks(filterBooks);
  };
 // funzione per prendere il valore dall'imput
  const handleResetSearchBar = (value) => {

    setSearchTerm(value.target.value);


    if (value === "") {
      filterBooks(value);
    }
  };



  return (
    <Navbar bg="primary" data-bs-theme="dark" sticky='top'>
      <Container fluid className='mx-0'>
        <Nav className="me-auto">
        <Image className='logo' src="https://png.pngtree.com/template/20190420/ourmid/pngtree-book-logo-template-design--book-logo-with-modern-frame-image_143635.jpg" alt="Logo" />
        
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        {/* Al form fli passiamo la ricerca del libbro richiamando la funzione */}
        <Form className="d-flex" onSubmit={filterBooks}  > 

          <Form.Control
             // prendiamo il valore in input
            onChange={(e) => handleResetSearchBar(e)}
            type="text"
            placeholder="Search"
          />
          <Button className='ms-2' type='submit' variant="outline-success bg-info">Cerca</Button>
          <Button onClick={toggleTheme}  className='ms-2' type='submit' variant="outline-success bg-info">Modalità</Button>
        </Form>

      </Container>
    </Navbar>
  );
}

export default NavBar;