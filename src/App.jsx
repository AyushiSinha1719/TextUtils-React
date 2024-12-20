import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')
  const[btnText,setBtnText]=useState("Enable Dark Mode")
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#0e203b'
    setBtnText("Enable Light Mode")
    showAlert("Dark Mode has been enabled","success")

    document.title='TextUtils - Dark Mode'

    // setInterval(()=>{
    //   document.title='TextUtils is amazing'
    // },2000)
    // setInterval(()=>{
    //   document.title='Download Now TextUtils'
    // },1500)              //This is for changing title of the page after some time
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    setBtnText("Enable Dark Mode")
    showAlert("Light Mode has been enabled","success")
    document.title='TextUtils - Light Mode'
  }
}

  return (
    <> 
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>

    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />

    {/* <Routes>
    <Route exact path="/about" element={<About />} />
    <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
    </Routes> */}

    </div>
    {/* </Router> */}
    </>
  )
}

export default App
