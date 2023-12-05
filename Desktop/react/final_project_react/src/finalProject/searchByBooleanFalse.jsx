
import { useNavigate } from 'react-router-dom';
export default function SearchByBooleanFalse(props) {
    const newNavigate = useNavigate();
    const searchByBooleanFalse = async () => {
        // window.location.href = 'http://localhost:3000/User/Home/Todo';
        // window.location.reload();
        // newNavigate(`/User/${props.userId}/home/Todo`);
        await props.open();
        await filterData();

    }
    const filterData = async () => {
        let newData = props.data.filter((a) => a.completed !== true)
        props.setData((prevData) => [...prevData] = newData)
        console.log(newData);

    }
    return (
        <div>
            <button onClick={searchByBooleanFalse}>SearchByBooleanFalse</button>
        </div>
    )

}