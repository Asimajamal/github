import React, { useState } from "react";

const About = (props) => {

    const [myStyle,setMyStyle] =useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnColor,setBtnColor]=useState({
        backgroundColor:'black',
        color:'white'
    })
//code for  color chnage with mode
    // let myabout={
    //   color:props.mode==='dark'? 'white':'black',
    //   backgroundColor: props.mode==='dark'? '#d3c8e3':'white'
    // }

    const [btnText,setBtnText] =useState('Enable Dark Mode');
   
    const toggleStyle=()=>{
      if(myStyle.color ==='white'){
        setMyStyle({
            color:'black',
        backgroundColor:'white'
        
        })
        setBtnColor({
            backgroundColor:'black',
            color:'white'
        })
        
        setBtnText('Enable Dark Mode');
        
      }
      else{
        setMyStyle({
            color:'white',
        backgroundColor:'black',
        border:'1px solide white'
        
      })
      setBtnColor({
        backgroundColor:'white',
        color:'black'
    })
    
      setBtnText('Enable Light Mode');
      
    }
}
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About app</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This is  word and character count and is easy and free to use. 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This word counter app is compatible with any browser e.g chrome,microsoft edge etc
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            This is a word and character counter app.You can convert text from uppercase to lowercase ,can remove extra spaces,
              you can copy text.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
      <button type="button" class="btn my-3" style={btnColor} onClick={toggleStyle}>{btnText}</button>
      </div>
    </div>
  );
};

export default About;