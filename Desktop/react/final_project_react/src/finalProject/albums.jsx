import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EddNewOne from "./eddNewOne"
import SearchByTitle from "./searchByTitle"
import { useNavigate } from 'react-router-dom';



export default function Albums(props) {
    const newNavigate = useNavigate();
    const [albumsURL, setAlbumsURL] = useState([]);
    let currentUser = [];
    const open = async () => {
        let album = "https://jsonplaceholder.typicode.com/albums?userId=";
        let albumsUrl = await fetch("http://localhost:5000/albums?userId=currentUser"+props.userId);
        let data = await albumsUrl.json();
        setAlbumsURL(data)
        console.log(albumsURL);
        console.log(albumsUrl);
        console.log(data);
    }
    useEffect(() => {
        open();
    }, []);



    return (
        <div>
            album
            <ArrangementByLetters data={albumsURL} setData={setAlbumsURL} />
            <ArrangementByNumbers data={albumsURL} setData={setAlbumsURL} />
            <SearchByTitle data={albumsURL} setData={setAlbumsURL} />
            {/* <EditCurrent data={albumsURL} setData={setAlbumsURL} /> */}
            {/* <EddNewOne data={albumsURL} setData={setAlbumsURL} /> */}
            <table >
                <thead >
                    <tr>
                        <th style={{ width: '50px' }}>id</th>
                        <th style={{ width: '200px' }}>title</th>
                    </tr>
                </thead>
                <tbody>
                    {albumsURL.map((element, index) => (
                        <tr key={index}>
                            <td style={{ width: '50px' }}>{element.id}</td>
                            <td style={{ width: '200px' }}>
                                <div onClick={()=>newNavigate(`/User/${props.userId}/home`)}>{element.title}</div> </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {albumsURL.map((element, index) => (
                <div key={index}>
                    <p>{element.id}</p>
                    <p onClick={()=>newNavigate(`/User/${props.userId}/home`)}>{element.title}</p>
                </div>
            ))}

        </div>
    )

}