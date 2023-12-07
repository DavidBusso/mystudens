import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function EditCurrentBody(props) {
    const newNavigate = useNavigate();
    const [valueTheInput, setValueTheInput] = useState("")
    const editCurrentBody = async () => {
        console.log(newOne);
        console.log(props.types);
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        console.log(props.data);
        await props.open();
    }
    let newOne = {
        userId: props.data.userId,
        id: props.data.id,
        body: valueTheInput,
        title: props.data.title,
    }

    const add = async () => {
        await fetch('http://localhost:5000/' + props.types + '/' + props.data.id, {
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
            <textarea type="text" name="title" onChange={(event) => setValueTheInput(event.target.value)} >
            </textarea>
            <button onClick={editCurrentBody}>Edit body</button>
        </div>
    )

}