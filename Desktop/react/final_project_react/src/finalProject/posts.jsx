import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EddNewOne from "./eddNewOne"
import SearchByTitle from "./searchByTitle"
import '../cssFiles/posts.css'
import DeleteOne from "./deleteOne"
import EditCurrentBody from "./editCurrentBody"

export default function Posts(props) {
    const [postsURL, setPostsURL] = useState([]);
    const [showBody, setShowBody] = useState(false)
    const [currentName, setCurrentName] = useState({})
    let currentUser = [];
    let current = props.userId;
    const open = async () => {
        let posts = "http://localhost:5000/posts?userId="
        let post = "https://jsonplaceholder.typicode.com/posts?userId=";
        currentUser = posts + current;
        let postsUrl = await fetch(currentUser);
        let data = await postsUrl.json();
        setPostsURL(data)
        console.log(postsURL);
        console.log(postsUrl);
        console.log(data);
    }
    useEffect(() => {
        open();
        getName();
    }, []);
    const getName = async () => {
        let getCurrentName = await fetch("http://localhost:5000/users/1")
        let jsonCurrentName = await getCurrentName.json();

        setCurrentName(jsonCurrentName);
        console.log(currentName);
    }

    return (
        <div>
            post
            <ArrangementByLetters data={postsURL} setData={setPostsURL} />
            <ArrangementByNumbers data={postsURL} setData={setPostsURL} />
            <SearchByTitle data={postsURL} setData={setPostsURL} open={open} userId={props.userId} types={"posts"} />
            <EddNewOne data={postsURL} setData={setPostsURL} open={open} userId={props.userId} types={"posts"} />
            <div>
                {postsURL.map((post, index) => (
                    <div key={index} className="post">
                        <h3>
                            <p>{currentName.name}</p>
                            <p>{"user " + post.userId}</p>
                            <p>{"id " + post.id}</p></h3>
                        <h2>{post.title}</h2>
                        <button onClick={() => setShowBody(!showBody)}>{showBody ? "hide Body" : "read more"}</button>

                        <p style={{ display: showBody ? "block" : "none" }}>{post.body}</p>
                        <div>

                            <div style={{ width: '200px' }}> <EditCurrent data={post} setData={setPostsURL} open={open} types={"posts"} /></div>
                            <div style={{ width: '200px', display: showBody ? "block" : "none" }}> <EditCurrentBody data={post} setData={setPostsURL} open={open} types={"posts"} /></div>
                            <div style={{ width: '200px' }}> <DeleteOne data={post} setData={setPostsURL} open={open} types={"posts"} /></div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}