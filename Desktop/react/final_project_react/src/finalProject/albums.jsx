import React, { useState, useEffect } from "react"
import ArrangementByLetters from "./arrangementByLetters"
import ArrangementByNumbers from "./arrangementByNumbers"
import EditCurrent from "./editCurrent"
import EddNewOne from "./eddNewOne"
import SearchByTitle from "./searchByTitle"

export default function Albums(props) {
    const [albumsURL, setAlbumsURL] = useState([]);
    let currentUser = [];
    const open = async () => {
        let albums ="http://localhost:5000/albums?userId="
        let album = "https://jsonplaceholder.typicode.com/albums?userId=";
        let current = props.userId;
        currentUser = albums + current;
        let albumsUrl = await fetch(currentUser);
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
            <EditCurrent data={albumsURL} setData={setAlbumsURL} />
            <EddNewOne data={albumsURL} setData={setAlbumsURL} />
            <table >
                <thead >
                    <tr>
                        <th style={{ width: '50px' }}>id</th>
                        <th style={{ width: '200px' }}>title</th>
                        {/* <th style={{ width: '50px' }}>completed</th> */}
                    </tr>
                </thead>
                <tbody>
                    {albumsURL.map((element, index) => (
                        <tr key={index}>
                            <td style={{ width: '50px' }}>{element.id}</td>
                            <td style={{ width: '200px' }}>{element.title}</td>
                            {/* <td style={{ width: '50px' }}>{element.completed ? "true" : "false"}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )

}