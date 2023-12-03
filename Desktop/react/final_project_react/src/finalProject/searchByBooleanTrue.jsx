import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function SearchByBooleanTrue(props) {
    // let currentUser = "";
    // let data = [];
    // const newNavigate = useNavigate();
    // const searchByBooleanTrue = async () => {
    //     await props.open();
    //     // newNavigate(`/User/${props.userId}/home/Todo`);
    //     await filterData();

    // }
    // const filterData = async () => {
    //     let newData = props.data.filter((a) => a.completed === true)
    //     await props.setData((prevData) => [...prevData] = newData)
    //     console.log(newData);
    // }


    const filterData = () => {
        const newData = props.data.filter((task) => task.completed === true);
        props.setData(newData);
      };
    
    return (
        <div>
            {/* <button onClick={searchByBooleanTrue}>SearchByBooleanTrue</button> */}
            <button onClick={filterData}>SearchByBooleanTrue</button>
        </div>
    )

}