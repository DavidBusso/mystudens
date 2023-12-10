import React, { useState, useEffect } from "react"
import '../cssFiles/photos.css'
export default function Photos(props) {
    const [photosURL, setPhotosURL] = useState([]);
    const open = async () => {
        let photosUrl = await fetch("http://localhost:5000/photos?albumId=" + props.albumId);
        let data = await photosUrl.json();
        setPhotosURL(data)
    }
    useEffect(() => {
        open();
    }, []);
    return (
        <div className="image-gallery">
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