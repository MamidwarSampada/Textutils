import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To UpperCase","success")
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success")
        }

    const handleCrClick= ()=>{
        let newText=("");
         setText(newText)
         props.showAlert("Cleared Text","success")
            }
    const handleExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        //console.log(newText)
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success")
    }
    const handleCopy= ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success")
        
    }
    const handleOnChange= (event)=>{
         setText(event.target.value);

    }


    const [text,setText] = useState('')

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className= 'mb-4'>{props.heading}</h2>
        <div className="mb-3">        
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#44698d':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Conver To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Conver To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCrClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
       
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words{text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
