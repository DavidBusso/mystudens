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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />}></Route> */}
          <Route path='' element={<Home />} >  </Route>
          <Route path='/User/Home/Todo' element={<Todo />}>  </Route>
          <Route path='/User/Home/Albums' element={<Albums />}>   </Route>
          <Route path='/User/Home/Posts' element={<Posts />}>  </Route>
          {/* <Route path='*' element={<Error />}>  </Route> */}
        </Routes>
        <footer>our footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
