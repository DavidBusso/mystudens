import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useParamsת, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './finalProject/register';
import Login from './finalProject/login';
import Home from './finalProject/home';

import Albums from "./finalProject/albums";
import Posts from "./finalProject/posts";
import Todo from "./finalProject/todo";

function App() {
  const [log, setLog] = useState(true);
  const [userId, setUserId] = useState();
  const [currentName,setCurrentName]=useState("");
  const nameOfUser=async()=>{
    let reject =await fetch(" http://localhost:5000/users/"+userId)
    let name =await reject.json();
   setCurrentName(name.name);
    console.log(name);
  }
  nameOfUser();
  return (
    <div className="App">
      
      <input type="button" value={log?'login':'logout'} onClick={() =>{setLog(false); window.location.href = '/Login'}} />
      <h3>hello {currentName}</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login setUserId={setUserId} setLog={setLog} />}></Route>
          <Route path={`/User/${userId}/home`} element={<Home userId={userId} />} ></Route>
          <Route path='/Register' element={<Register />} ></Route>
          <Route path={`/User/${userId}/home/Todo`} element={<Todo userId={userId} />}></Route>
          <Route path={`/User/${userId}/home/Albums`} element={<Albums userId={userId} />}></Route>
          <Route path={`/User/${userId}/home/Posts`} element={<Posts userId={userId} />}></Route>
          {/* <Route path='*' element={<Error />}>  </Route> */}
        </Routes>
        <footer>our footer</footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
