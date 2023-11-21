import React, { useState } from "react";
function PrevPlayers(props) {
    const addPlayer = () => {
        props.setSelectPlayers(
            (prevSelectPlayers) => {
                if (!props.chooseStartGame) {
                    let checkName = prevSelectPlayers.some((player) => player.name === props.currentPlayer.name);
                    if (prevSelectPlayers.length < 4 && !checkName) {
                        return [...prevSelectPlayers, props.currentPlayer];
                    }
                    return prevSelectPlayers;
                }
            })
    }
    return (
        <div>
            {props.currentPlayer != null &&
                <input type="button"
                    value={props.currentPlayer.name}
                    onClick={addPlayer}>
                </input>}
        </div>
    )
}
export default PrevPlayers;