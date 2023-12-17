import React, { useState, useEffect, useRef } from "react"
import { useInView } from 'react-intersection-observer';
import '../cssFiles/photos.css'
export default function Photos(props) {
    const [photosURL, setPhotosURL] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     rootMargin: '250px',
    // });
    const open = async () => {
        const photosUrl = await fetch(`http://localhost:5000/photos?albumId=${props.albumId}&_page=${pageNumber}&_limit=9`);
        let data = await photosUrl.json();
        setPhotosURL((prevPhotos) => [...prevPhotos, ...data]);
    }
    useEffect(() => {
        open();
    }, []);


    // useEffect(() => {
    //     if (inView ) {
    //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
    //         open();
    //     }
    // }, [ inView , pageNumber]);
    const seeMore = async () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        await open();
    }

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
            <div className="clickToCee" onClick={seeMore}><p>click to see more</p></div>
            {/* <div ref={ref} ></div> */}
        </div>
    )

}
