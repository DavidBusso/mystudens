import React, { useState } from "react";

function Player(props) {
    const name = props.players.name;
    const randomPoint = Math.floor(Math.random() * 100);
    const [showPlayer, setShowPlayer] = useState(true);
    let [newPoint, setNewPoint] = useState(randomPoint);
    let [counterSteps, setCounterSteps] = useState(0);
    const changPoint = (action) => {
        if (action <= 100 && props.index == props.queueManage) {
            setNewPoint(action);
            setNewPoint((newPoint) => Math.floor(newPoint));
            props.players.moves = counterSteps;
            setCounterSteps(counterSteps + 1)
            props.changeQueueManage()
            if (action === 100) {
                alert(name + " is winner")
                const confirmation = window.confirm("Are you sure you want to exit?");
                let counterAllSteps = (props.players.averagePositions * props.players.winners) + counterSteps;
                let winners = props.players.winners + 1;
                props.players.averagePositions = counterAllSteps / winners;
                props.players.winners++;
                let allLocalPlayers = JSON.parse(localStorage.getItem('historyPlayers')) || [];
                for (let i = 0; i < allLocalPlayers.length; i++) {
                    if (allLocalPlayers[i].name == props.players.name) {
                        allLocalPlayers[i] = props.players;

                    }
                }
                localStorage.setItem('historyPlayers', JSON.stringify(allLocalPlayers));
                if (confirmation) {
                    setShowPlayer(false);
                    props.players.status = false;
                }
                else {
                    counterSteps = 0;
                    setCounterSteps(counterSteps);
                    setNewPoint(newPoint = Math.floor(Math.random() * 100));
                }
            }
        }
        else {
            if (action > 100) alert("the action is illegal");
            if (props.index != props.queueManage) alert("its' not your turn");
        }
    }

    const changeShowPlayer = () => {
        setShowPlayer(false)
        props.players.status = false;
        if (props.index === props.queueManage)
            props.changeQueueManage()
        console.log(props.index === props.queueManage);
    }
    return (
        <div className="player" style={{ display: showPlayer ? "block" : "none" }}>
            <div className="playerDetails">Player Name:<p>{name}</p></div>
            <div className="playerDetails">Player Number:<p>{newPoint}</p></div>
            <div className="playerDetails">Steps:<p>{counterSteps}</p></div>
            <div className="playerDetails">winners:<p>{props.players.winners}</p></div>
            <input className="buttonActions" type="button" onClick={() => changPoint(newPoint + 1)} value={"+1"}></input>
            <input className="buttonActions" type="button" onClick={() => changPoint(newPoint - 1)} value={"-1"}></input>
            <input className="buttonActions" type="button" onClick={() => changPoint(newPoint * 2)} value={"*2"}></input>
            <input className="buttonActions" type="button" onClick={() => changPoint(newPoint / 2)} value={"/2"}></input>
            <div>
                <input className="startAgain" type="button" onClick={() => setNewPoint(newPoint = Math.floor(Math.random() * 100))}
                    value={ "start again"} ></input>

                {/* <button class="button-bottom" onClick={() => { changeShowPlayer(); }}>exit</button> */}
            </div>

        </div>
    )
}
export default Player;


