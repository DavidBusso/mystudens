
export default function ArrangementByNumbers(props){
    const arrangementByNumbers=()=>{
        props.data.sort((a, b) => a.id-b.id)
        props.setData((prevData)=>[...prevData])
        console.log(props.data);
    }

    return(
        <div>
            <button onClick={arrangementByNumbers}>ArrangementByNumbers</button>
        </div>
    )

}