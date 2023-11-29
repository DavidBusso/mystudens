import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './finalProject/register';
import Login from './finalProject/login';
import Home from './finalProject/home';

import Albums from "./finalProject/albums";
import Posts from "./finalProject/posts";
import Todo from "./finalProject/todo";



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
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='User/Home' element={<Home />} >  </Route>
          <Route path='User/Home/Todo' element={<Todo />}>  </Route>
          <Route path='User/Home/Albums' element={<Albums />}>   </Route>
          <Route path='User/Home/Posts' element={<Posts />}>  </Route>
          {/* <Route path='*' element={<Error />}>  </Route> */}
        </Routes>
        <footer>our footer</footer>

      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
