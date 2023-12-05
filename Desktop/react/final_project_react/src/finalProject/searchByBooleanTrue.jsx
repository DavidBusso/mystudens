import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function SearchByBooleanTrue(props) {

    const newNavigate = useNavigate();
    const searchByBooleanTrue = async () => {
        // newNavigate(`/User/${props.userId}/home/Todo`);
        await props.open();
        await filterData();

    }
    const filterData = async () => {
        let newData = props.data.filter((a) => a.completed === true)
        await props.setData((prevData) => [...prevData] = newData)
        console.log(newData);
    }
    return (
        <div>
            <button onClick={searchByBooleanTrue}>SearchByBooleanTrue</button>
        </div>
    )

}