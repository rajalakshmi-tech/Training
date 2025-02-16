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
  function practice(){
    console.log("Practice makes a man perfect");
  }
  const fullstack =()=>{
    console.log("Welcome to fullstack");
  }
return (
    <>
  <h1 style={{textAlign:"center",color:"black"}}>Inline css</h1>
  <h2 style={{textAlign: "center",color:"crimson"}}>RAJALAKSHMI</h2>
  <h1 style={{textAlign: "center",color:"black"}}>External css</h1>
  <p className='info'>Name : {details.name}</p>
  <button onClick={practice}> react</button>
  <button onClick={fullstack}>click</button>
  <button onClick={()=>console.log("student")}>Student</button>

    
    </>
  )
}
export default App