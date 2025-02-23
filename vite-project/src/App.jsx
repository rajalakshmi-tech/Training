
import React from 'react'
import './App.css'
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Feedback from "./Feedback";

function App() {
  
  const [name,setName]=useState("");
  const[dept,setDept]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(dept);
  }
return (
  <>
   <div>
    <form className='form' onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
      <input className='input' type="text" required value={name}placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
      <input className='input' type="text" required value={dept} placeholder='Enter your Department' onChange={(e)=>setDept(e.target.value)}/>
      <input className='email' type="email" required placeholder='Enter your Email'/>
      <input className='password' type="password" required placeholder='Enter your Password'/>
      <input calssName='DOB' type="Date" required placeholder='Enter your date'/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

    </form>
   </div>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
 
    
  </>
  );
};
export default App;