export default function Photos(props) {
    const newNavigate = useNavigate();
    const [photosURL, setPhotosURL] = useState([]);
    const open = async () => {
        let photo = "https://jsonplaceholder.typicode.com/photos?userId=";
        let photosUrl = await fetch("http://localhost:5000/photos?userId="+props.userId);
        let data = await photosUrl.json();
        setPhotosURL(data)
        // console.log(photosURL);
        // console.log(photosUrl);
        // console.log(data);
    }
    useEffect(() => {
        open();
    }, []);



    return (
        <div>
            album
            {/* <ArrangementByLetters data={photosURL} setData={setphotosURL} />
            <ArrangementByNumbers data={photosURL} setData={setphotosURL} />
            <SearchByTitle data={photosURL} setData={setphotosURL} />
            <EditCurrent data={photosURL} setData={setphotosURL} />
            <EddNewOne data={photosURL} setData={setphotosURL} /> */}
            <table >
                <thead >
                    <tr>
                        <th style={{ width: '50px' }}>id</th>
                        <th style={{ width: '200px' }}>title</th>
                    </tr>
                </thead>
                <tbody>
                    {photosURL.map((element, index) => (
                        <tr key={index}>
                            <td style={{ width: '50px' }}>{element.id}</td>
                            <td style={{ width: '200px' }}>
                                <div onClick={()=>newNavigate(`/User/${props.userId}/home`)}>{element.title}</div> </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {photosURL.map((element, index) => (
                <div key={index}>
                    <p>{element.id}</p>
                    <p onClick={()=>newNavigate(`/User/${props.userId}/home`)}>{element.title}</p>
                </div>
            ))}

        </div>
    )

}