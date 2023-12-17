export default function SearchByBooleanTrue(props) {
    let currentUserData = [];
    const searchByBooleanTrue = async () => {
        await openTrue();
        await filterData();
    }
    const filterData = async () => {
        let newData = currentUserData.filter((a) => a.completed === true)
        await props.setData(newData)
    }
    const openTrue = async () => {
        let tasksUrl = await fetch("http://localhost:5000/todos?userId=" + props.userId);
        let dataTrue = await tasksUrl.json();
        currentUserData = dataTrue;
    }
    return (
        <div>
            <button onClick={searchByBooleanTrue}>SearchByBooleanTrue</button>
        </div>
    )
}