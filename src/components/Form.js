import React, { useState } from 'react'

//import produce from "immer";
import { set, has } from "lodash";

const Form = () => {

  const [name, setName]=useState("");
  const [fullname, setFullname]=useState("");

  const changeHandler=(e)=>{
    //console.log(e.target.value)
    setName(e.target.value)
    if(e.target.value===''){
        setFullname(e.target.value)
    }
  }
  const onSubmit=()=>{
    setFullname(name);
  }

  return (
    <div>
           
        <div>fullname: {fullname}</div>
        
            <input 
                type="text" 
                name="name" 
                value={name}
                placeholder='Enter your name'
                onChange={changeHandler}    
            />
            <button onClick={onSubmit}>Click me</button>
        
    </div>
  )
}

export default Form