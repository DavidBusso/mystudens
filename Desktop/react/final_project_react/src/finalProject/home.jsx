import React, {useState} from "react"
import Albums from "./albums"
import Posts from "./posts"
import Todo from "./todo"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const newNavigate=useNavigate()
    const [album, setAlbum]=useState(false)
    const [todo, setTodo]=useState(false)
    const [post, setPost]=useState(false)

    return(
        <div>
              <input type="button" value={"todo"}  onClick={()=> newNavigate('/User/Home/Todo')}/>
              <input type="button" value={"albums"}  onClick={()=> newNavigate('/User/Home/Albums')}/>
              <input type="button" value={"posts"}  onClick={()=> newNavigate('/User/Home/Posts')}/>


            {/* <input type="button" value={"albums"}  onClick={()=>setAlbum(true)}/>
            {album&& <Albums />}   */}
            {/* <input type="button" value={"todo"} onClick={()=>setTodo(true)}/>
            {todo&& <Todo />}
            <input type="button" value={"poste"} onClick={()=>setPost(true)}/>
            {post&& <Posts />} */}

        </div>
    )

}