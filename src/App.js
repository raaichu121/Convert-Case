import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes, 
    Route
    // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode or light 
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); 
      document.body.style.backgroundColor ='#1a2a46';
      // document.body.style.color = 'white';

    } else {
      setMode('light'); 
      document.body.style.backgroundColor ='white';
      // document.body.style.color = 'black';
    }
  };

  return (
    <>
    <Router>

      {/* This will render Navbar with title="My App" and about="About Us" (from defaultProps) */}
      <Navbar title="My App" mode={mode} toggleMode={toggleMode} home="Home" about="About Us" />
      <div className="container my-2">
        <Routes> 
          {/* exact used for 100% matching of url */}
          <Route exact path="/about" element={<About />} />  
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} />} />
          
          
        </Routes>
        
      </div> 
      </Router>
    </>
  );
}

export default App;
