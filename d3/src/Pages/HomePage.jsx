import React, {useState, useEffect, useContext} from "react";
import '../App.css';
import NavBar from '../Components/NavBar/NavBar';
import Welcome from '../Components/Welcome/welcome';
import LastRelase from '../Components/Main/LeastRelase';
import Footer from '../Components/Footer/footer';
import '../Components/NavBar/NavBar.css';

import { ThemeProvider } from "../Components/NavBar/ThemeProvider";

// export const getBooksContext = createContext();


// creaiamo la funzione per la Home Page dove gli passiamo la get tramite fetch di tutti i libbri e richiamiamo i vari componente da visualizzare
function HomePage() {

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
    {/* Theme Provider è strutturato con lo useContext  */}
    <ThemeProvider > 
      <NavBar books={books} setBooks={setBooks} getBooksApi={libri}/>
      <Welcome />
      <LastRelase books={books} />
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default HomePage;
