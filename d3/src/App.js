import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ErrorPage } from "./Pages/ErrorPage";
import { BookDetalis } from "../src/Components/Main/BookDetalis";



function App() {

  
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



