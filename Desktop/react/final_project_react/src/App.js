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
  // const loginNavigate = useNavigate();
  const [userId, setUserId] = useState();
  // const {userId}=useParams();
  //   useEffect(() => {
  //   console.log(userId);
  // }, []);


  return (
    <div className="App">

      {/* <input type="button" value={'login'}  onClick={()=> loginNavigate('/Login')}/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login setUserId={setUserId} />}></Route>
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
