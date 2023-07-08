import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!" , "success");
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }
    const speak = () =>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("let me speak" , "success");
    }
    const clear = () =>{
      
      setText(" ")
    }
    const [text , setText] = useState('');
    //setText("new text");
  return (
    <>
    <div className="container" style={{color : props.mode === "dark" ? "white" : "black"}}>
    
      <h1>{props.heading} </h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "dark" ? "grey" : "white" , 
      color : props.mode === "dark" ? "white" : "black"}} 
      id="myBox" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to upperCase</button>
      <button className='btn btn-primary mx-1' onClick={speak}>speak</button>
      <button className='btn btn-primary mx-1' onClick={clear}>clear</button>
    
    </div>

    <div className="conatiner my-3" style={{color : props.mode === "dark" ? "white" : "black"}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and  {text.length}  characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>preview</h3>
      <p>{text.length>0?text:"enter something to preview it here"}</p>
    </div>
    </>
  )
}
