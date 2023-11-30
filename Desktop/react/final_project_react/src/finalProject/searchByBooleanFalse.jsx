
export default function SearchByBooleanFalse(props) {

    const  searchByBooleanFalse = () => {
        // window.location.href = 'http://localhost:3000/User/Home/Todo';
        // window.location.reload();
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