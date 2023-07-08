

import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import React , {useState} from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

//import TextForm from './components/TextForm';



function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState("null");

  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
      if(mode ==="light"){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        showAlert('dark mode has been enabled' , "Success");
      }else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert('light mode has been enabled' , "Success");
      }
  }

  const toggleRedMode = () =>{
    if(mode ==="light"){
      setMode('dark');
      document.body.style.backgroundColor = "red";
  }else{
    setMode("light");
    document.body.style.backgroundColor = "white";
  }
}
const toggleyellowMode = () =>{
  if(mode ==="light"){
    setMode('dark');
    document.body.style.backgroundColor = "yellow";
}else{
  setMode("light");
  document.body.style.backgroundColor = "white";
}
}
const toggleGreenMode = () =>{
  if(mode ==="light"){
    setMode('dark')
    document.body.style.backgroundColor = "green";
}else{
  setMode("light");
  document.body.style.backgroundColor = "white";
}
}
  return (
    <>
      {/* <Navbar title="textUtils2" LinkText ="about TextUtils" /> */}
      <Router>
      <Navbar title='textutils' mode = {mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} 
      toggleyellowMode ={toggleyellowMode} toggleGreenMode ={toggleGreenMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Routes>
          <Route exact path="/" element ={<TextForm showAlert= {showAlert} heading="enter text here" mode = {mode}/>} />
          <Route exact path="/about" element = {<About />} />
          </Routes>
        </div>
        </Router>  
    </>
  );
}

export default App;
