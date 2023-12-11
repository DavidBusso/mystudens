import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import SearchByTitle from "./searchByTitle"
import '../cssFiles/posts.css'
import CurrentPost from "./currentpost"
import EddNewOne from "./eddNewOne"

export default function Posts(props) {
    const [postsURL, setPostsURL] = useState([]);
    const [currentName, setCurrentName] = useState({})
    const open = async () => {
        let postsUrl = await fetch("http://localhost:5000/posts?userId=" + props.userId);
        let data = await postsUrl.json();
        setPostsURL(data)
    }
    const openName = async () => {
        let postsUrl = await fetch("http://localhost:5000/users/" + props.userId);
        let dataName = await postsUrl.json();
        setCurrentName(dataName)
    }
    useEffect(() => {
        open();
        openName();
    }, []);
    return (
        <div>
            post
            <ArrangementByLetters data={postsURL} setData={setPostsURL} />
            <ArrangementByNumbers data={postsURL} setData={setPostsURL} />
            <SearchByTitle setData={setPostsURL} userId={props.userId} types={"posts"} />
            <EddNewOne data={postsURL} setData={setPostsURL} userId={props.userId} open={open} types={"posts"} />
            <div>
                {postsURL.map((post, index) => (
                    <CurrentPost key={index} post={post} setData={setPostsURL}open={open} types={"posts"} currentName={currentName} />
                ))}
            </div>
        </div>
    )

}