import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import SearchByTitle from "./searchByTitle"
import { useNavigate } from 'react-router-dom';



export default function Albums(props) {
    const newNavigate = useNavigate();
    const [albumsURL, setAlbumsURL] = useState([]);
    let currentUser = [];
    const open = async () => {
        let album = "https://jsonplaceholder.typicode.com/albums?userId=";
        let albumsUrl = await fetch("http://localhost:5000/albums?userId=" + props.userId);
        let data = await albumsUrl.json();
        setAlbumsURL(data)
    }
    useEffect(() => {
        open();
    },[] );


    return (
        <div>
            album
            <ArrangementByLetters data={albumsURL} setData={setAlbumsURL} />
            <ArrangementByNumbers data={albumsURL} setData={setAlbumsURL} />
            <SearchByTitle data={albumsURL} setData={setAlbumsURL} />
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
                                {/* <a href={`/User/${props.userId}/home/Albums/Photos`}>{element.title}</a> */}
                                <p onClick={()=>{newNavigate(`/User/${props.userId}/home/Albums/Photos`);props.setAlbumId(element.userId)}}>{element.title}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )

}