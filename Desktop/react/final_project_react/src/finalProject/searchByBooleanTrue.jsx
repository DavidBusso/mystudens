import React, { useState, useEffect } from "react";
export default function SearchByBooleanTrue(props) {
    const searchByBooleanTrue = async () => {
        // window.location.href = 'http://localhost:3000/User/Home/Todo';
        // window.location.reload()
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