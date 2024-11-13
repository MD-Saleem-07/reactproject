import React ,{useState}from 'react'


export default function TextForm(props) {
    const handleupclick=()=>
        {
            console.log("uppercase was clicked")
            let newText=text.toUpperCase()
            setText(newText)
            
        };
        const handleonchange=(event) =>{
            console.log("onchange");
            setText(event.target.value)
            
            
        }
        const [text , setText] = useState("Enter text here");
    return (
    <>

    <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange}></textarea>
  

</div>
<button className="btn btn-primary" onClick={handleupclick}>
change to uppercase  
</button>
    </div>
    </>
  )
}
