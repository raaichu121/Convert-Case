// import logo from "./logo.svg";
// src/components/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* This will render Navbar with title="My App" and about="About Us" (from defaultProps) */}
      <Navbar title="My App" home="Home" about="About Us" />
      <div className="container my-2">

        <TextForm heading="Enter the text"/>
        </div> 
      
    </>
  );
}

export default App;
