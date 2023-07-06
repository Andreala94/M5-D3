import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import '../Welcome/welcome.css'


function Welcome() {
    return (
<div className="container ">
  <div className="justify-content-center">
        <Carousel className="m-lg-5 p-lg-3  ">
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-50 h-100 "
          src="https://www.lafeltrinelli.it/assets/2023/06/20230627053441-lettureestiverettangolarebig-.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-50 h-100 "
          src="https://www.repstatic.it/content/nazionale/img/2023/06/30/130736003-8e9769ab-2095-4363-b36f-72762842fd62.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carosello">
        <img
          className="d-flex w-50"
          src="https://www.gedistatic.it/content/gedi/img/huffingtonpost/2020/05/06/092141828-6d8b7944-eed5-4bf5-a7c5-2e3c8b17879d.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
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