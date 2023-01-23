import './TextForm.css';
import React, { useState } from 'react'
export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleOnLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleOnErase = () => {
        let newText = "";
        setText(newText);

    }

    const removeExtraSpace = ( )  => {
        let newText =  text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    
    const copyFun = () =>  {
        let textarea = document.getElementById("myBox");
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
      }


    const [text, setText] = useState('Enter your Text here...');

    return (
        <>
            <h2 className="heading my-3">{props.heading}</h2>
            <div className="mb-3">
                <div className="container">
                    <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
            </div>
            <button className='btn' onClick={handleOnUpperCase}>Convert To Upper Case</button>
            <button className='btn' onClick={handleOnLowerCase} >Convert To Lower Case</button>
            <button className='btn' onClick={handleOnErase}>Erase All</button>
            <button className='btn ' onClick={removeExtraSpace}>Extra Space Remover</button>
            <button className='btn ' onClick={copyFun}>Copy</button>
            <div className="container my-4">
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
