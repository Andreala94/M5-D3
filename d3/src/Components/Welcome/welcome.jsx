import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../Welcome/welcome.css';

function Welcome() {
    return (

        <Carousel className=" m-lg-5 p-lg-5 ">
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-100  "
          src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2020/05/06/092141828-6d8b7944-eed5-4bf5-a7c5-2e3c8b17879d.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-100  "
          src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2020/05/06/092141828-6d8b7944-eed5-4bf5-a7c5-2e3c8b17879d.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-100"
          src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2020/05/06/092141828-6d8b7944-eed5-4bf5-a7c5-2e3c8b17879d.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );


    
}

export default Welcome



/* function Welcome() {
    return (

        <div className="jumbotron">
            <h1 className="display-4">Benvenuti in Libreria!</h1>
            <p className="lead">Scegliete quale libbro vi piace di più.</p>
            <hr className="my-4"></hr>
            <p>A voi la scelta.</p>
        </div>


    )
}

export default Welcome */