import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function EditCurrent(props) {
    const newNavigate = useNavigate();
    const [valueTheInput, setValueTheInput] = useState("")
    const editCurrent = async () => {
        console.log(newOne);
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        console.log(props.data);
        await props.open();
    }
    let newOne = {
        userId: props.data.userId,
        id: props.data.id,
        title: valueTheInput,
        completed: props.data.completed,
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
            <label for="title"> </label>
            <input type="text" name="title" onChange={(event) => setValueTheInput(event.target.value)} />
            <button onClick={editCurrent}>Edit title</button>
        </div>
    )

}