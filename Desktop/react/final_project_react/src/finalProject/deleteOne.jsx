export default function DeleteOne(props) {
    const deleteOne = async () => {
        await deleteChoose();
        await deleteCurrent();
        await props.open();
    }
    const deleteCurrent = async () => {
        await deleteChoose();
        await props.setData((prevData) => [...prevData])
    }
    const deleteChoose = async () => {
        await fetch('http://localhost:5000/' + props.types + '/' + props.data.id, {
            method: 'DELETE',
        })
    }
    return (
        <div>
            <button onClick={deleteOne}>delete</button>
        </div>
    )
}