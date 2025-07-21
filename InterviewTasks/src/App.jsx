import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from 'react-router-dom';

// Pages import karo
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />            {/* "/" => Home */}
          <Route path="/about" element={<About />} />      {/* "/about" => About */}
          <Route path="/services" element={<Services />} />{/* "/services" => Services */}
          <Route path="/contact" element={<Contact />} />  {/* "/contact" => Contact */}
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
