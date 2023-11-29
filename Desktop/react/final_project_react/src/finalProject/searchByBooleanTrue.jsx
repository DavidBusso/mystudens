import React,{useState,useEffect} from "react";
export default function SearchByBooleanTrue(props) {

    const searchByBooleanTrue = () => {
        let newData= props.data.filter((a) => a.completed === true)
        props.setData((prevData) => [...prevData]=newData)
        console.log(newData);
    }
    return (
        <div>
            <button onClick={searchByBooleanTrue}>SearchByBooleanTrue</button>
        </div>
    )

}