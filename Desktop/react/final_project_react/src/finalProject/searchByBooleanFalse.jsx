
export default function SearchByBooleanFalse(props) {

    const searchByBooleanFalse = () => {
        let newData= props.data.filter((a) => a.completed !== true)
        props.setData((prevData) => [...prevData]=newData)
        console.log(newData);
    }
    return (
        <div>
            <button onClick={searchByBooleanFalse}>SearchByBooleanFalse</button>
        </div>
    )

}