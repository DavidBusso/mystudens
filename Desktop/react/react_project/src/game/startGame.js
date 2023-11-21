import React, { useState } from "react";
import Player from "./player";
function StartGame(props) {
    let [queueManage, setQueueManage] = useState(0);
    let changeQueueManage = () => {
        setQueueManage((prevQueue) => {
            let nextQueue = prevQueue + 1;
            if (nextQueue >= props.selectPlayers.length) {
                nextQueue = 0;
            }
            let checkStatus = false;
            for (let i = 0; i < props.selectPlayers.length; i++) {
                if (props.selectPlayers[i].status === true)
                    checkStatus = true
            }
            while (!props.selectPlayers[nextQueue].status && checkStatus) {

                nextQueue++;
                if (nextQueue >= props.selectPlayers.length) {
                    nextQueue = 0;
                }
            }
            return nextQueue;
        });
    };
    return (
        <div>
            <div className="divAllPlayer">
                {props.selectPlayers && props.selectPlayers.map((element, index) => (
                    <Player
                        key={index}
                        name={element.name}
                        index={index}
                        players={props.selectPlayers[index]}
                        queueManage={queueManage}
                        changeQueueManage={changeQueueManage}
                        setQueueManage={setQueueManage}
                    />
                ))}
            </div>
        </div>
    )
}
export default StartGame;


