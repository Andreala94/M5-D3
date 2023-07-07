import React, { useState, useEffect, useContext } from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/welcome';
import LastRelase from './Components/Main/LeastRelase';
import Footer from './Components/Footer/footer';

import { ThemeProvider } from "react-bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ErrorPage } from "./Pages/ErrorPage";
import { BookDetalis } from "../src/Components/Main/BookDetalis";

// export const getBooksContext = createContext();

function App() {

  const [books, setBooks] = useState([]);

  const [libri, setLibri] = useState([]);

  const getBooksApi = async () => {
    try {

      const data = await fetch('https://epibooks.onrender.com/')


      const response = await data.json();
      setBooks(response);
      setLibri(response);



    } catch (error) {

    }
  }

  useEffect(() => {

    getBooksApi();
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route>
              <Route exact path="/" element={<HomePage />}/>
              
              <Route path="/book/:bookid" element={<BookDetalis />} />

              

              <Route path="*" element={<ErrorPage />}/>
            </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;



// return (
//   <>
//   <ThemeProvider >
//     <NavBar books={books} setBooks={setBooks} getBooksApi={libri}/>
//     <Welcome />
//     <LastRelase books={books} />
//     <Footer />
//   </ThemeProvider>
//   </>
// );