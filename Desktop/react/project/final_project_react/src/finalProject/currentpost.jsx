import React, { useState } from 'react'
import '../cssFiles/posts.css'
import EditCurrent from './editCurrent'
import EditCurrentBody from './editCurrentBody'
import DeleteOne from './deleteOne'
export default function CurrentPost(props) {
    const [showBody, setShowBody] = useState(false)


    return (
        <div>
            <div key={props.key} className="post">
                <h3>
                    <p>{props.currentName.name}</p>
                    <p>{"user " + props.post.userId}</p>
                    <p>{"id " + props.post.id}</p></h3>
                <h2>{props.post.title}</h2>
                <button onClick={() => setShowBody(!showBody)}>{showBody ? "hide Body" : "read more"}</button>
                <p style={{ display: showBody ? "block" : "none" }}>{props.post.body}</p>
                <div>
                    <div style={{ width: '200px' }}>
                        <EditCurrent
                            data={props.post}
                            setData={props.setData}
                            open={props.open}
                            types={"posts"}
                        /></div>
                    <div style={{ width: '200px', display: showBody ? "block" : "none" }}>
                        <EditCurrentBody
                            data={props.post}
                            setData={props.setData}
                            open={props.open}
                            types={"posts"}
                        /></div>
                    <div style={{ width: '200px' }}>
                        <DeleteOne
                            data={props.post}
                            setData={props.setData}
                            open={props.open}
                            types={"posts"}
                        /></div>
                </div>
            </div>


        </div>
    )
}