import React, { useState, useEffect, createContext } from "react"
import ArrangementByBooleanTrue from "./arrangementByBooleanTrue"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EddNewOne from "./eddNewOne"
import SearchByBooleanFalse from "./searchByBooleanFalse"
import SearchByTitle from "./searchByTitle"
import ArrangementByBooleanFalse from "./ArrangementByBooleanFalse"
import SearchByBooleanTrue from "./searchByBooleanTrue"
import DeleteOne from "./deleteOne"

export default function Todo(props) {

    const [tasksURL, setTasksURL] = useState([]);
    let currentUser = [];
    const open = async () => {
        let tasks = "http://localhost:5000/todos?userId="
        let task = "https://jsonplaceholder.typicode.com/todos?userId=";
        let current = props.userId;
        currentUser = tasks + current;
        let tasksUrl = await fetch(currentUser);
        let data = await tasksUrl.json();
        setTasksURL(data)
        console.log(tasksURL);
        console.log(tasksUrl);
        console.log(data);
    }
    useEffect(() => {
        open();
    }, []);
    return (
        <div>
            todo
            <ArrangementByBooleanFalse data={tasksURL} setData={setTasksURL} />
            <ArrangementByBooleanTrue data={tasksURL} setData={setTasksURL} />
            <ArrangementByLetters data={tasksURL} setData={setTasksURL} />
            <ArrangementByNumbers data={tasksURL} setData={setTasksURL} />
            <SearchByBooleanFalse data={tasksURL} setData={setTasksURL} userId={props.userId} />
            <SearchByBooleanTrue data={tasksURL} setData={setTasksURL} userId={props.userId} open={open}/>
            <SearchByTitle data={tasksURL} setData={setTasksURL} />
            <EditCurrent data={tasksURL} setData={setTasksURL} userId={props.userId} />
            <EddNewOne data={tasksURL} setData={setTasksURL} userId={props.userId} />
            <DeleteOne data={tasksURL} setData={setTasksURL} userId={props.userId} />
            <table >
                <thead >
                    <tr>
                        <th style={{ width: '50px' }}>id</th>
                        <th style={{ width: '200px' }}>title</th>
                        <th style={{ width: '50px' }}>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksURL.map((element, index) => (
                        <tr key={index}>
                            <td style={{ width: '50px' }}>{element.id}</td>
                            <td style={{ width: '200px' }}>{element.title}</td>
                            <td style={{ width: '50px' }}>{element.completed ? "true" : "false"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
// import DeleteOne from "./deleteOne" <DeleteOne data={tasksURL} setData={setTasksURL} arr={currentUser} />
//  <EditCurrent data={tasksURL} setData={setTasksURL} arr={currentUser} />
//  <EditNewOne data={tasksURL} setData={setTasksURL} arr={currentUser} userNumber={current} /> 