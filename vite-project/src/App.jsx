
import React from 'react'
import './App.css'
import Comp1 from './Comp1'

function App() {
  const info={
    name:"Rajalakshmi",
    dept:"M.Tech cse",
    SecId:"Sec23cj001",
    age:19,
  }
  const info2={
    name2:"Ponvedica",
    dept:"cse",
    SecId:"Sec23cj002",
    age2:20,
  }
  

return (

    <>
    <h1 style={{textAlign:"center",color:"black"}}>Friends Forever</h1>
    <div>
      <Comp1  name={info.name} age={info.age}/>
      <Comp1 name2={info2.name2} age2={info2.age2}/>
    </div>
    <h1 style={{textAlign:"center",color:"black"}}>My SECID is {info.SecId}</h1>
    <h1 style={{textAlign:"center",color:"black"}}>My  friend's SECID is {info2.SecId}</h1>
    <button onClick={()=>alert("On click is clicked")}>click</button><br></br>
    <button onDoubleClick={()=>alert("On click is Double clicked")}>Double click</button>
  
  
    
    </>
  )
}
export default App