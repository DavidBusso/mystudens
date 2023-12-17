import { useState } from "react";
export default function EditCurrentBody(props) {
    const [valueTheInput, setValueTheInput] = useState("")
    const editCurrentBody = async () => {
        await add();
        await props.setData((prevData) => [...prevData, newOne])
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
            <label for="body"> </label>
            <textarea type="text" name="body" onChange={(event) => setValueTheInput(event.target.value)} >
            </textarea>
            <button onClick={editCurrentBody}>Edit body</button>
        </div>
    )
}