import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
              <Container fluid className='mx-0'>
                <Nav className="me-auto">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browse</Nav.Link>
                </Nav>
                <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // onChange={(event) =>this.handleInputChange(event)}
              // onKeyUp={ this.props.mySearch}
              
            />
            <Button 
            // onClick={this.handleInputChange(event)}
            variant="outline-success bg-info">Search</Button>
          </Form>
         
              </Container>
            </Navbar>
  );
}

export default NavBar;