import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [inputFileds,setInputFileds] = useState([])
  const handleAdd=()=>{
    const newObj = {
      id : Date.now(),
      value : ""
    }
    setInputFileds((prev)=>[...prev,newObj])
  }

  const handleUpdate=(e,id)=>{
    const updatedField = inputFileds.map((field)=>(
      field.id === id ? {...field,value : e.target.value} : field
    )) 
    setInputFileds(updatedField)
  }

  const handleDelete=(id)=>{
    const deletedField = inputFileds.filter((field)=>(
      field.id !== id 
    ))
    setInputFileds(deletedField)
  }
  return (
    <div>
      <h2>Add Input Fields</h2>
      <button onClick={handleAdd}>Add</button>
      {
        inputFileds.map((input,id)=>(
          <div key={id}>
          <input id={input.id} value={input.value} onChange={(e)=>handleUpdate(e,input.id)} />
          <button onClick={()=>(handleDelete(input.id))}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default App