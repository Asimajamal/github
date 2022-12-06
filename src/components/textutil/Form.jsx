import React, { useState} from "react";


const Form = (props) => {
  const [text, setText] = useState("");
const [copy,setCopy]=useState("Copy Text");


  const changHandler = (e) => {
    setText(e.target.value);
  };

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Converted to Upper case","success");
  };
  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Converted to Lower case","success");
  };

  const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.displayAlert("Removed Extra Spaces","success");
  
  }
  const handleClearText=()=>{
    let newText = " "
    setText(newText);
    setCopy('Copy Text');
    props.displayAlert("Text Cleared","success");
    
    }

    const handleCopyText=()=>{
      // these all are extra lines we dont need if we use navigator api
      // let newText = document.getElementById("myBox")
      // newText.select();
      // navigator.clipboard.writeText(newText.value);
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      setCopy('Text Copied')
      
      
      }
  return (
    <>
      <div className="conatiner my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={changHandler} 
            style={{backgroundColor:props.mode==='dark'?'rgb(3 6 51)':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
          <button className="btn btn-primary my-2 " onClick={handleUpCase}  style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} disabled={text.length===0}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoCase} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}  disabled={text.length===0}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}  disabled={text.length===0}>
            Remove Extra Spaces
          </button>
         
         <button className="btn btn-primary my-3 mx-2" onClick={handleCopyText} id="copp" style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}  disabled={text.length===0} >
         {copy}
          </button> 
          
          <button className="btn btn-primary my-3 mx-2" onClick={handleClearText} style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}}  disabled={text.length===0} >
          Clear Text
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        {/* use regular expression for white space as well new line  */}
        <p><strong>Total Words:</strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </p>
        <p><strong>Total Characters:</strong> {text.length}</p>
        <p><strong>Reading Time:</strong> {1/125 * text.split(" ").filter((element)=>{return element.length!==0}).filter((element)=>{return element.length!==0}).length}  minutes</p>
        <h3>Preview</h3> 
         <p>{text.length>0?text :"Enter Sometning to Preview it"}</p>
      </div>
    </>
  );
};

export default Form;
