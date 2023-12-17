import { useState} from "react";
export default function EditCurrent(props) {
    const [valueTheInput, setValueTheInput] = useState("")
    const editCurrent = async () => {
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        await props.open();
    }
    let newOne={};
    if(props.types === "todos"){
     newOne = {
        userId: props.data.userId,
        id: props.data.id,
        title: valueTheInput,
        completed: props.data.completed,
    }}
    if(props.types === "posts"){
        newOne = {
           userId: props.data.userId,
           id: props.data.id,
           title: valueTheInput,
           body: props.data.body,
       }}
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
            <input type="text" name="title" onChange={(event) => setValueTheInput(event.target.value)} />
            <button onClick={editCurrent}>Edit title</button>
        </div>
    )
}