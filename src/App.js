import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {

  const [changeMode, setchangeMode] = useState('ligth');

  const toggleMode = () => {
    if (changeMode === 'light') {
      setchangeMode('dark');
    }
    else {
      setchangeMode('light');
    }

  }

  return (
    <>
      <Navbar title="TextUtiles" toggleMode={toggleMode} mode={changeMode} home="Home" about="About TextUtils" />
      <div className="container">

        <TextForm heading="Enter a Text to Analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
