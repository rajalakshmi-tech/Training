import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name="RAJALAKSHMI R"
  const details={
    name:"RAJALAKSHMI",
    age:20,
    roll:18
  }
  alert("Hiiiiiii")
  console.log('My name is ',details.name)
  function training(){
    console.log("Welcome to react");
  }
  const fullstack=()=>{
    console.log("Welcome to fullstack");
  }


  return (
    <>
      <h2 style={{textAlign:"center"}}>Inline css</h2>
      <h1 style={{textAlign:"center",color:"crimson"}}>RAJALAKSHMI</h1><br></br>
      <h2 style={{textAlign:'center'}}>External css</h2>
      <p className='info'>Name : {details.name}</p>
      <button onclick={training}>Training</button>
      <button onClick={fullstack}>Fullstack</button>
      <button onClick={()=>console.log("student")}>Student</button>
    
    </>
  )
}
export default App