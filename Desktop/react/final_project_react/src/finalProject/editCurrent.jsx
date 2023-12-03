import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export default function EditCurrent(props) {
    const newNavigate = useNavigate();
    const [valueTheInput, setValueTheInput] = useState("")


    // let valueTheInput = "";
    const catchTheInput = (event) => {
        setValueTheInput(event.target.value);
        // valueTheInput = event.target.value;
    }
    let valueTheNumber = "";
    const chooseNum = (event) => {
        valueTheNumber = event.target.value;
    }
    let statusValue = null;
    const seStatus = (event) => {
        statusValue = event.target.value;
    }
    const editCurrent = async () => {
        console.log(newOne);
        await add();
        await props.setData((prevData) => [...prevData, newOne])
        console.log(props.data);
       newNavigate(`/User/${props.userId}/home`);

    }
    // useEffect(() => {
       
    // }, [editCurrent]);
    let newOne = {
        userId: props.userId,
        id: 1,
        title: valueTheInput,
        completed: true,
    }
    const add = async () => {
        await fetch('http://localhost:5000/todos/' + valueTheNumber, {
            method: 'PUT',
            body: JSON.stringify(newOne),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    return (
        <div>
            <p>choose one to adit</p>
            <label for="title">write a task to do </label>
            <input type="text" name="title" onChange={catchTheInput} />
            <label for="status">Choose a status </label>
            <select id="status" name="status" onChange={seStatus}>
                <option value="Choose">Choose</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <label for="chooseDelete">Choose number </label>
            <select id="chooseDelete" name="chooseDelete" onChange={chooseNum}>
                <option value="Choose">Choose</option>
                {props.data.map((element, index) => (
                    <option key={index} value={element.id}>{element.id}</option>
                ))}
            </select>
            <button onClick={editCurrent}>EditCurrent</button>
        </div>
    )

}