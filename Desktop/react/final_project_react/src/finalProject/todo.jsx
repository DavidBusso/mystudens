import React, { useState, useEffect,createContext } from "react"
import ArrangementByBooleanTrue from "./arrangementByBooleanTrue"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EditNewOne from "./editNewOne"
import SearchByBooleanFalse from "./searchByBooleanFalse"
import SearchByTitle from "./searchByTitle"
import ArrangementByBooleanFalse from "./ArrangementByBooleanFalse"
import SearchByBooleanTrue from "./searchByBooleanTrue"

export default function Todo(props) {

    const [tasksURL, setTasksURL] = useState([]);
    let currentUser = [];
    const open = async () => {
        let tasks ="http://localhost:5000/todos?userId="
        let task = "https://jsonplaceholder.typicode.com/todos?userId=";
        let current = 5;
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
            <SearchByBooleanFalse data={tasksURL} setData={setTasksURL} />
            <SearchByBooleanTrue data={tasksURL} setData={setTasksURL} />
            <SearchByTitle data={tasksURL} setData={setTasksURL} />
            <EditCurrent data={tasksURL} setData={setTasksURL} />
            <EditNewOne data={tasksURL} setData={setTasksURL} />
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