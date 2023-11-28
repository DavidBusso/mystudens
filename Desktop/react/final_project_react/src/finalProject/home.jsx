import React, {useState} from "react"
import Albums from "./albums"
import Posts from "./posts"
import Todo from "./todo"


export default function Home(){
    const [album, setAlbum]=useState(false)
    const [todo, setTodo]=useState(false)
    const [post, setPost]=useState(false)

    return(
        <div>
            <input type="button" value={"albums"}  onClick={()=>setAlbum(true)}/>
            {album&& <Albums />}  
            <input type="button" value={"todo"} onClick={()=>setTodo(true)}/>
            {todo&& <Todo />}
            <input type="button" value={"poste"} onClick={()=>setPost(true)}/>
            {post&& <Posts />}

        </div>
    )

}