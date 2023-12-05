import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function EditCurrentStatus(props) {
    const newNavigate = useNavigate();
    const [statusValue, setStatusValue] = useState(null);
    const editCurrent = async () => {
        console.log(newOne);
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        console.log(props.data);
        await props.open();
        // newNavigate(`/User/${props.data.userId}/home`);
    }
    // useEffect(() => {
    // }, [editCurrent]);
    let newOne = {
        userId: props.data.userId,
        id: props.data.id,
        title: props.data.title,
        completed: statusValue,
    }
    const add = async () => {
        await fetch('http://localhost:5000/todos/' + props.data.id, {
            method: 'PUT',
            body: JSON.stringify(newOne),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    return (
        <div>
            <label for="status"></label>
            <select id="status" name="status" onChange={(event) => setStatusValue(event.target.value === "true")}>
                <option value="Choose" disabled selected>Choose</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <button onClick={editCurrent}>Edit status</button>

        </div>
    )
}
