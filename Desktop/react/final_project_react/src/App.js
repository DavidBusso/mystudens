import React, { useState } from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from './finalProject/register';
import Login from './finalProject/login';
import Home from './finalProject/home';
import Albums from "./finalProject/albums";
import Posts from "./finalProject/posts";
import Todo from "./finalProject/todo";
import Photos from "./finalProject/photos";

function App() {
  const [log, setLog] = useState(true);
  const [userId, setUserId] = useState();
  const [currentName, setCurrentName] = useState("");
  const [albumId, setAlbumId] = useState("")
  const nameOfUser = async () => {
    let reject = await fetch(" http://localhost:5000/users/" + userId)
    let name = await reject.json();
    setCurrentName(name.name);
  }
  nameOfUser();
  return (
    <div className="App">
      <input type="button" value={log ? 'login' : 'logout'} onClick={() => { setLog(false); window.location.href = '/Login' }} />
      <h3>hello {currentName}</h3>
      <div className="comp">
        <BrowserRouter>
          <Routes>
            <Route path='/Login' element={<Login setUserId={setUserId} setLog={setLog} />}></Route>
            <Route path={`/User/${userId}/home`} element={<Home userId={userId} />} ></Route>
            <Route path='/Register' element={<Register />} ></Route>
            <Route path={`/User/${userId}/home/Todo`} element={<Todo userId={userId} />}></Route>
            <Route path={`/User/${userId}/home/Posts`} element={<Posts userId={userId} />}></Route>
            <Route path={`/User/${userId}/home/Albums`} element={<Albums userId={userId} setAlbumId={setAlbumId} />}></Route>
            <Route path={`/User/${userId}/home/Albums/Photos`} element={<Photos userId={userId} albumId={albumId} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}
export default App;
