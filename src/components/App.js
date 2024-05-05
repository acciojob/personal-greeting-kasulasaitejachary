
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  function changeName(e){
    setName(e.target.value);
  }
  return (
    <div>
      <h1>Enter your name:</h1>
      <input type="text" onChange={changeName}/>
      {name !== "" ? <p>Hello {name}!</p> : " "}
    </div>
  )
}

export default App
