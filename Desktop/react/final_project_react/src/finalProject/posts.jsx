import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import SearchByTitle from "./searchByTitle"
import '../cssFiles/posts.css'
import DeleteOne from "./deleteOne"
import EditCurrentBody from "./editCurrentBody"
import CurrentPost from "./currentpost"

export default function Posts(props) {
    const [postsURL, setPostsURL] = useState([]);
    const [showBody, setShowBody] = useState(false)
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
            <div>
                {postsURL.map((post, index) => (
                    <CurrentPost key={index} post={post} setData={setPostsURL}open={open} types={"posts"} currentName={currentName} />
                    // <div key={index} className="post">
                    //     <h3>
                    //         <p>{currentName.name}</p>
                    //         <p>{"user " + post.userId}</p>
                    //         <p>{"id " + post.id}</p></h3>
                    //     <h2>{post.title}</h2>
                    //     <button onClick={() => setShowBody(!showBody)}>{showBody ? "hide Body" : "read more"}</button>
                    //     <p style={{ display: showBody ? "block" : "none" }}>{post.body}</p>
                    //     <div>
                    //         <div style={{ width: '200px' }}>
                    //             <EditCurrent
                    //                 data={post}
                    //                 setData={setPostsURL}
                    //                 open={open}
                    //                 types={"posts"}
                    //             /></div>
                    //         <div style={{ width: '200px', display: showBody ? "block" : "none" }}>
                    //             <EditCurrentBody
                    //                 data={post}
                    //                 setData={setPostsURL}
                    //                 open={open}
                    //                 types={"posts"}
                    //             /></div>
                    //         <div style={{ width: '200px' }}>
                    //             <DeleteOne
                    //                 data={post}
                    //                 setData={setPostsURL}
                    //                 open={open}
                    //                 types={"posts"}
                    //             /></div>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    )

}