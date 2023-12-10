export default function SearchByBooleanFalse(props) {
    let currentUserData = [];
    const searchByBooleanFalse = async () => {
        await openFalse();
        await filterData();
    }
    const filterData = async () => {
        let newData = currentUserData.filter((a) => a.completed !== true)
        props.setData(newData)
    }
    const openFalse = async () => {
        let tasksUrl = await fetch("http://localhost:5000/todos?userId=" + props.userId);
        let dataFalse = await tasksUrl.json();
        currentUserData = dataFalse;
    }
    return (
        <div>
            <button onClick={searchByBooleanFalse}>SearchByBooleanFalse</button>
        </div>
    )
}