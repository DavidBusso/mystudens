export default function SearchByTitle(props) {
    let currentUserData = [];
    let valueTheInput = "";
    const searchByTitle = async (event) => {
        await openTitle();
        await catchTheInput(event);
    }
    const catchTheInput = async (event) => {
        valueTheInput = event.target.value;
        let newData = currentUserData.filter((a) => a.title.includes(valueTheInput))
        props.setData(newData);
    }
    const openTitle = async () => {
        let tasksUrl = await fetch("http://localhost:5000/" + props.types + "?userId=" + props.userId);
        let dataTitle = await tasksUrl.json();
        currentUserData = dataTitle;
    }
    return (
        <div>
            <label htmlFor="searchTitle"> search title</label>
            <input type="text" name={"searchTitle"} onChange={searchByTitle} />
        </div>
    )
}