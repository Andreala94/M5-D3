import React, {useState, useEffect, useContext} from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/welcome';
import LastRelase from './Components/Main/LeastRelase';
import Footer from './Components/Footer/footer';

import { ThemeProvider } from "react-bootstrap";

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
    <ThemeProvider >
      <NavBar books={books} setBooks={setBooks} getBooksApi={libri}/>
      <Welcome />
      <LastRelase books={books} />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
