import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Welcome from './Components/Welcome/welcome';
import LastRelase from './Components/Main/LeastRelase';
import Footer from './Components/Footer/footer'

function App() {
  return (
   <>
    <NavBar />
    <Welcome />
    <LastRelase />
    <Footer />
   </>
  );
}

export default App;
