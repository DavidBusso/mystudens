import './App.css';
import Register from './finalProject/register';
import Login from './finalProject/login';
import Home from './finalProject/home';
import React, { useState } from "react"

function App() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [home, setHome] = useState(false)
  const [choose, setChoose] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <input type="button" value={"Login"} style={{ display: choose ? "block" : "none" }} onClick={() => { setLogin(true); setChoose(false) }} />
        {login && <Login />}
        <input type="button" value={"Register"} style={{ display: choose ? "block" : "none" }} onClick={() => { setRegister(true); setChoose(false) }} />
        {register && <Register />}
        <input type="button" value={"Home"} style={{ display: choose ? "block" : "none" }} onClick={() => { setHome(true); setChoose(false) }} />
        {home && <Home />}

      </header>
    </div>
  );
}

export default App;
