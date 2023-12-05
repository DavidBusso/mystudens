export default function DeleteOne(props) {
    const deleteOne = async () => {
        await deleteChoose();
        await deleteCurrent();
        await props.open();
    }
    const deleteCurrent = async () => {
        await deleteChoose();
        await props.setData((prevData) => [...prevData])
        console.log(props.data);
    }
    const deleteChoose = async () => {
        await fetch('http://localhost:5000/todos/' + props.data.id, {
            method: 'DELETE',
        })
    }
    return (
        <div>
            <button onClick={deleteOne}>deleteOne</button>
        </div>
    )

}