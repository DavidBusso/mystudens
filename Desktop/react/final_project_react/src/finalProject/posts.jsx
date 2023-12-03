import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EddNewOne from "./eddNewOne"
import SearchByTitle from "./searchByTitle"
import '../cssFiles/posts.css'

export default function Posts(props) {
    const [postsURL, setPostsURL] = useState([]);
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
    }, []);
    return (
        <div>
            post
            <ArrangementByLetters data={postsURL} setData={setPostsURL} />
            <ArrangementByNumbers data={postsURL} setData={setPostsURL} />
            <SearchByTitle data={postsURL} setData={setPostsURL} />
            <EditCurrent data={postsURL} setData={setPostsURL} />
            <EddNewOne data={postsURL} setData={setPostsURL} />
            <div>
                {postsURL.map((post, index) => (
                    <div key={index} className="post">
                        <h3>{post.userId}</h3>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}