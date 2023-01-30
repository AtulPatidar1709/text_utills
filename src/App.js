import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {

  const [changeMode, setchangeMode] = useState('ligth');

  const toggleMode = () => {
    if (changeMode === 'light') {
      setchangeMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setchangeMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtiles" toggleMode={toggleMode} mode={changeMode} home="Home" about="About TextUtils" />
        <div className="container">
          <Routes>
            <Route exact  path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter a Text to Analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
