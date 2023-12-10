import { useNavigate } from "react-router-dom";
export default function Home(props) {
    const newNavigate = useNavigate()
    return (
        <div>
            <input type="button" value={"todo"} onClick={() => newNavigate(`/User/${props.userId}/home/Todo`)} />
            <input type="button" value={"albums"} onClick={() => newNavigate(`/User/${props.userId}/home/Albums`)} />
            <input type="button" value={"posts"} onClick={() => newNavigate(`/User/${props.userId}/home/Posts`)} />
        </div>
    )

}