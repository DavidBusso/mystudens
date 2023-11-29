export default function SearchByTitle(props) {
    let valueTheInput="";
    const catchTheInput = (event) => {
        valueTheInput = event.target.value;
        let newData = props.data.filter((a) => a.title.includes(valueTheInput))
        props.setData((prevData) => [...prevData] = newData)
    }
    const searchByTitle = () => {
        console.log(valueTheInput);
        let newData = props.data.filter((a) => a.title.includes(valueTheInput))
        props.setData((prevData) => [...prevData] = newData)
        console.log(newData);
    }


    return (
        <div>
            {/* <textarea name="searchTitle" id="searchTitle" cols="30" rows="10" onChange={catchTheInput}></textarea> */}
            <input type="text" name={"searchTitle"} onChange={catchTheInput} />
            <button onClick={searchByTitle}>SearchByTitle</button>
        </div>
    )

}