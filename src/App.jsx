// // import logo from './logo.svg';
// // rafc
// import './App.css';
// import Navbar from './components/textutil/Navbar';
// // import UseEffect from './components/UseEffect';
// import About from './components/textutil/About';
// import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route

// } from "react-router-dom";


// import Form from './components/textutil/Form';
// import { useState } from 'react';
// import Alert from './components/textutil/Alert';

// function App() {

//   const [mode,setMode] =useState('light')
//   const [modeText,setModeText]=useState('Enable Dark Mode')
//   // const [btn,setBtn] = useState({
//   //   backgroundColor:'black',
//   //   color:'white'
//   // })
//   const [alert,setAlert]=useState(null);

//   const displayAlert=(message,type)=>{

//     setAlert({
//       message:message,
//       type:type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 3000);
     
//   }

//   const removebody=()=>{
//     document.body.classList.remove('bg-primary');
//     document.body.classList.remove('bg-danger');
//     document.body.classList.remove('bg-success');
//     document.body.classList.remove('bg-light');
//     document.body.classList.remove('bg-dark');
//     document.body.classList.remove('bg-warning');

//   }
    
// const pallete=(cls)=>{
// removebody();
// document.body.classList.add('bg-'+cls);
// if(cls==='primary'){
//   document.getElementById("myBox").style.background='#0d6efd'
// }
// if(cls==='warning'){
//   document.getElementById("myBox").style.background='#ffc107'
// }
// if(cls==='success'){
//   document.getElementById("myBox").style.background='#198754'
// }
// if(cls==='danger'){
//   document.getElementById("myBox").style.background='#dc3545'
// }
// }




//   const toggleMode=()=>{
//    removebody();
//     if(mode==='light'){
//       setMode('dark');
//       setModeText('Enable Light Mode');
//       document.body.style.backgroundColor='rgb(3 6 51)';
//       displayAlert("Dark mode has been enabled","success");
//       document.title='TextUtils-Dark Mode'
      
      
//     }
//     else{
//       setMode('light');
//       setModeText('Enable Dark Mode');
//       document.body.style.backgroundColor='white';
//       displayAlert("Light mode has been enabled","success");
      
//     }
    
    
//   }
//   return (

//     //<UseEffect></UseEffect>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
// <Router>
// <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={modeText} pallete={pallete}/>
// <Alert alert={alert} />

// <div className="container my-3">
// <Routes>
//           <Route path="/about" element={<About mode={mode}/>}/>
            
        
//           <Route path="/" element={
//           <Form  heading="Enter Your Text " mode={mode} displayAlert={displayAlert} pallete={pallete}></Form>}/>
        
//         </Routes>

//         </div>
// </Router>

    
    
//     {/* <About></About> */}

    
//     </>
//   );
// }

// export default App;

////Random Users code
import React from 'react'
import './App.css';
import UseEffect from './components/randomusers/UseEffect'
const App = () => {
  return (
    <div>
      <UseEffect/>
    </div>
  )
}

export default App
