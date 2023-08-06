import React, { useState } from 'react'


export default function Textform({heading}) {
    
    const handleUpclick = () => {
        setText(text.toUpperCase());
        setPreview(text.toUpperCase());
    }
    const handledownclick = () => {
        setText(text.toLowerCase());
        setPreview(text.toLowerCase());

    }
    const handleonchange = (event) => {
        setText(event.target.value)
            setPreview(event.target.value.length>0?event.target.value:"Nothing to preview 😒");
           
            
    }
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("Nothing to preview 😒");
  
    const wordsCount = ()=>{
        let words = text.split(" ")
                if(text === ''){
            return 0;
        }
        else{
            let k = 0;
            let p = 0;
            let q = 0;
            for(let i=0; i<words.length; i++){
              if(words[i] === ''){
                k++;
              }
              if(words[i][0] === '\n' && words[i][1] !== '\n'){
                q += 1;
                }
              
              for(let j=0; j<words[i].length;j++){
                if(words[i].length>1 && words[i][j] === '\n'){
                  p += 1;
                }
              
              }
              
            }
            return (words.length-k+p-q);
        }
    }
    let words = wordsCount();
    return (
        <>
            <div className='container'>
                <h1 className='heading1'>{heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox"></label>
                    <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handleonchange} placeholder='Enter text here'></textarea>
                </div>
                <button id='btn1' className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
                <button id='btn2' className="btn btn-primary mx-2" onClick={handledownclick}>Convert to LowerCase</button>
            </div>
            <div className='container my-2'>
                <h1>Your text summary</h1>
                <p>{words} words</p>
                <h3>Preview of text</h3>
                <p id='h51'>{preview}</p>
            </div>
        </>
    )
}



