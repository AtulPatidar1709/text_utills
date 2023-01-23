import './TextForm.css';
import React, { useState } from 'react'
export default function TextForm(props) {

const handleOnChange = () => {
   console.log("Upper was Clicked");
}

const handleOnClick = () => {
    console.log("On Click");
}

    const [text, setText] = useState('Enter your Text here...');


    return (
        <>
            <h2 className="heading my-3">{props.heading}</h2>
            <div className="mb-3">
            <div className="container">  
                <textarea className="form-control my-3" value={text} onChange =  {handleOnChange}   id="myBox" rows="8"></textarea>
            </div>
            </div>
            <button className='btn'  onClick={handleOnClick}>Convert To Upper Case</button>
            <button className='btn'>Convert To Lower Case</button>
            <button className='btn'>Remove Extra Space</button>

        </>
    )
}
