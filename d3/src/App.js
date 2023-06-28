import React, {useState, useEffect} from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/welcome';
import LastRelase from './Components/Main/LeastRelase';
import Footer from './Components/Footer/footer';
import AddComment from './Components/Main/AddComment';

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
      <NavBar books={books} setBooks={setBooks} getBooksApi={libri}/>
      <Welcome />
      <LastRelase books={books} />
      <Footer />
    </>
  );
}

export default App;
