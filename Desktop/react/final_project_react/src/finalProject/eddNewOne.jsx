import { useState, useEffect } from "react";
import '../cssFiles/addNewOne.css'
export default function EddNewOne(props) {
    const [showAdd, setShowAdd] = useState(false)
    const [valueTheInput, setValueTheInput] = useState("");
    const [statusValue, setStatusValue] = useState("");
    const [valueTheTextarea, setValueTheTextarea] = useState("");
    const editNewOne = async () => {
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        await props.open();
    }
    let newOne = {};
    if (props.types === "posts") {
        newOne = {
            title: valueTheInput,
            userId: props.userId,
            body: valueTheTextarea,
        }
    }
    if (props.types === "todos") {
        newOne = {
            completed: statusValue,
            title: valueTheInput,
            userId: props.userId,
        }
    }
    const add = async () => {
        await fetch('http://localhost:5000/' + props.types, {
            method: 'POST',
            body: JSON.stringify(newOne),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    return (
        <div className="container">
            <button onClick={() => setShowAdd(!showAdd)}>add new one</button>
            <div style={{ display: showAdd ? "block" : "none" }}>
                <label for="title">write a title </label>
                <input type="text" name="title" onChange={(event) => setValueTheInput(event.target.value)} />
                <div style={{ display: props.types === "posts" ? "block" : "none" }}>
                    <label for="body">write a body </label>
                    <textarea type="text" name="body" onChange={(event) => setValueTheTextarea(event.target.value)} >
                    </textarea>
                </div >
                <div style={{ display: props.types === "todos" ? "block" : "none" }}>
                    <label for="status">Choose a status </label>
                    <select id="status" name="status" onChange={(event) => setStatusValue(event.target.value)}>
                        <option value="Choose" disabled selected>Choose</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <button onClick={editNewOne}>EditNewOne</button>
            </div>

        </div>
    )

}