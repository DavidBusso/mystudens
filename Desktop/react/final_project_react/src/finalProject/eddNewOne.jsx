import { useState, useEffect } from "react";
export default function EddNewOne(props){
    const [ valueTheInput,setValueTheInput]=useState("")
    const [ statusValue,setStatusValue]=useState("")
    const editNewOne = async () => {
        console.log(newOne);
        await add();
        await props.setData((prevData) => [...prevData,newOne])
        console.log(props.data);
        await props.open();
    }
    let newOne = {
        completed: statusValue,
        title: valueTheInput,
        userId: props.userId,
    } 
    const add = async () => {
        await fetch('http://localhost:5000/todos', {
            method: 'POST',
            body: JSON.stringify(newOne),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    return (
        <div>
            <p>write a new one</p>
            <label for="title">write a task to do </label>
            <input type="text" name="title" onChange={(event)=>setValueTheInput(event.target.value)} />
            <label for="status">Choose a status </label>
            <select id="status" name="status" onChange={(event)=>setStatusValue(event.target.value)}>
                <option value="Choose"  disabled selected>Choose</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <button onClick={editNewOne}>EditNewOne</button>
        </div>
    )

}