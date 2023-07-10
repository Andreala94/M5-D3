import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ErrorPage } from "./Pages/ErrorPage";
import { BookDetalis } from "../src/Components/Main/BookDetalis";


 //Creaiamo la funzione principale passandogli le rotte delle pagine
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route>
              <Route exact path="/" element={<HomePage />}/>
              
              <Route path="/book/:bookid" element={<BookDetalis />} />

              
              {/* L'ultima pagina e quella di errore con * ciò sta a significare che quando non ci saranno piu pagine da visualizzare entra in funzione questa */}
              <Route path="*" element={<ErrorPage />}/>
            </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;



