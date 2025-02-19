
import React from 'react'
import './App.css'
import Comp1 from './Comp1'
import {useState} from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(0);
  const changeTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
  
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
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <div className="content">
        <h1 style={{ textAlign: "center", color: isDarkMode ? "#F9F6E6" : "darkred" }}>
          Friends Forever 
        </h1>

        <br />
      <div>
      <Comp1  name={info.name} age={info.age}  
      name2={info2.name2} age2={info2.age2}/>
      </div>
      <h1 style={{textAlign:"center"}}>My SECID is {info.SecId}</h1>
      <h1 style={{textAlign:"center"}}>My  friend's SECID is {info2.SecId}</h1>
      <button onClick={()=>alert("On click is clicked")}>click</button><br></br>
      <button onDoubleClick={()=>alert("On click is Double clicked")}>Double click</button> <br></br>
      <button className="toggle-button" onClick={changeTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </div>

  </>
  );
};
export default App;