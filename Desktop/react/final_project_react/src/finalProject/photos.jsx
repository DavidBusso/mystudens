import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import '../cssFiles/photos.css'
export default function Photos(props) {
    const newNavigate = useNavigate();
    const [photosURL, setPhotosURL] = useState([]);
    const open = async () => {
        let photo = "https://jsonplaceholder.typicode.com/photos?userId=";
        let photosUrl = await fetch("http://localhost:5000/photos?albumId=" + props.albumId);
        let data = await photosUrl.json();
        setPhotosURL(data)
        console.log(photosURL);
    }
    useEffect(() => {
        open();
    }, []);
    // open();
    return (
        <div className="image-gallery">
            album
            <div className="image-row">
                {photosURL.map((element, index) => (
                    <div key={index} >
                        <img src={element.url} alt="" loading="lazy" style={{ width: '200px' }} />
                        <p>{element.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}