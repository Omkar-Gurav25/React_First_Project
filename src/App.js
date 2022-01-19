import React from 'react';
import Navbar from './Components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/services" element={<Services />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
