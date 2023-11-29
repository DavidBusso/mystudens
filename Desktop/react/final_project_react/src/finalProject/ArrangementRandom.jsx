export default function ArrangementRandom(props){
    const arrangementRandom=()=>{
        props.data.sort((a, b) => b.completed-a.completed)
        props.setData((prevData)=>[...prevData])
        console.log(props.data);
    }
    return(
        <div>
            <button onClick={arrangementRandom}>ArrangementRandom</button>
        </div>
    )

}
