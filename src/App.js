import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtiles" home="Home" about="About TextUtils" />
      <div className="container">
 
        <TextForm  heading="Enter a Text to Analyze below"/>
    </div>  
      {/* <Button button = "Convert to LowerCase" />
      <Button button = "Remove Extra Space" /> */}

    </>
  );
}

export default App;
