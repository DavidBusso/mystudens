import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
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
import EditCurrentStatus from "./editcurrentStatus";
import '../cssFiles/todo.css'
export default function Todo(props) {
    const navigate = useNavigate();
    const [tasksURL, setTasksURL] = useState([]);
    const open = async () => {
        let tasksUrl = await fetch("http://localhost:5000/todos?userId=" + props.userId);
        let data = await tasksUrl.json();
        setTasksURL(data)
    }
    useEffect(() => {
        open();
    }, []);
    return (
        <div className="todo-container">
            <div className="buttons-section">
                <ArrangementByBooleanFalse data={tasksURL} setData={setTasksURL} />
                <ArrangementByBooleanTrue data={tasksURL} setData={setTasksURL} />
                <ArrangementByLetters data={tasksURL} setData={setTasksURL} />
                <ArrangementByNumbers data={tasksURL} setData={setTasksURL} />
                <SearchByBooleanFalse setData={setTasksURL} userId={props.userId} />
                <SearchByBooleanTrue setData={setTasksURL} userId={props.userId} />
            </div>
            <div>
                <SearchByTitle setData={setTasksURL} types={"todos"} userId={props.userId} />
                <EddNewOne data={tasksURL} setData={setTasksURL} userId={props.userId} open={open} types={"todos"} />
            </div>

            <div className="table-section">
                <table >
                    <thead >
                        <tr>
                            <th style={{ width: '25px' }}>id</th>
                            <th style={{ width: '200px' }}>title</th>
                            <th style={{ width: '50px' }}>completed</th>
                            <th style={{ width: '150px' }}> adit status </th>
                            <th style={{ width: '200px' }}> adit title </th>
                            <th style={{ width: '200px' }}> delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasksURL.map((element, index) => (
                            <tr key={index}>
                                <td style={{ width: '25px' }}>{element.id}</td>
                                <td style={{ width: '200px' }}>{element.title}</td>
                                <td style={{ width: '50px' }}>{element.completed ? "true" : "false"}</td>
                                <td style={{ width: '150px' }}>
                                    <EditCurrentStatus
                                        data={element}
                                        setData={setTasksURL}
                                        open={open}
                                        types={"todos"}
                                    /></td>
                                <td style={{ width: '200px' }}>
                                    <EditCurrent
                                        data={element}
                                        setData={setTasksURL}
                                        open={open}
                                        types={"todos"}
                                    /></td>
                                <td style={{ width: '200px' }}>
                                    <DeleteOne
                                        data={element}
                                        setData={setTasksURL}
                                        open={open}
                                        types={"todos"}
                                    /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
