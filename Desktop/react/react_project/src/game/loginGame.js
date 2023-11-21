import React, { useState } from 'react';
import StartGame from './startGame';
import PrevPlayers from './prevPlayers';
import Player from './player';
import './game.css';
// function LoginGame() {
//     let play = {
//         name: "",
//         score: 0, moves: 0,
//         averagePositions: 0,
//         status: true,
//         winners: 0
//     }
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [updateName, setUpdateName] = useState(false);

//     let historyLocalPlayers = JSON.parse(localStorage.getItem('historyPlayers')) || [];
//     let [addNewPlayer, setAddWithNewPlayer] = useState(historyLocalPlayers);


//     let checkLocalStorage = () => {
//         if (historyLocalPlayers.some((player) => player.name === userName)) {
//             alert('the name already exists')

//         }
//         else {
//             play.name = userName;
//             setAddWithNewPlayer((prevPlayers) => [...prevPlayers, play])

//             localStorage.setItem('historyPlayers', JSON.stringify([...addWithNewPlayer, play]));
//             setUpdateName(true)
//         }
//         setUserName(userName = '');
//         setPassword(password = '');
//     };
//     return (
//         <div className='login'>
//             <h1>welcome to the game</h1>
//             <h1>Get to 100</h1>

//             <div className='prevPlayers'>

//                 {addWithNewPlayer != null && addWithNewPlayer.map((element, index) => {
//                     return (
//                         <PrevPlayers players={element}
//                             key={index}
//                         />
//                     )
//                 })}


//             </div>
//             <div>
//                 <h2>login </h2>
//                 <label> UserName:
//                     <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
//                 </label>
//                 <br />
//                 <label>Password:
//                     <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
//                 </label>
//                 <br />
//                 <button onClick={checkLocalStorage}>Login</button>
//             </div>
//             {updateName && <StartGame />}
//             {/* {updateName && <PrevPlayers allLocalPlayers={allLocalPlayers} />} */}

//             {/* <PrevPlayers
//             //  allLocalPlayers={allLocalPlayers}
//             /> */}
//             {/* <StartGame /> */}
//         </div>
//     );
// }
function LoginGame() {
    let playerState = {
        name: '',
        score: 0,
        moves: 0,
        averagePositions: 0,
        status: true,
        winners: 0,
    };

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [updateName, setUpdateName] = useState(false);
    const [chooseStartGame, setChooseStartGame] = useState(true);
    const [selectPlayers, setSelectPlayers] = useState([])
    const [addNewPlayer, setAddNewPlayer] = useState(
        JSON.parse(localStorage.getItem('historyPlayers')) || []
    );

    const checkLocalStorage = () => {
        const existingUser = addNewPlayer.some((player) => player.name === userName);

        if (existingUser) {
            alert('The name already exists');
        } else {
            playerState.name = userName;
            setAddNewPlayer((prevPlayers) => [...prevPlayers, playerState]);
            localStorage.setItem('historyPlayers', JSON.stringify([...addNewPlayer, playerState]));

            setUpdateName(true);
        }

        // Clear input fields
        setUserName('');
        setPassword('');
        console.log(addNewPlayer);
        console.log(setAddNewPlayer);
    };
    console.log(selectPlayers);
    return (
        <div className='login'>
            <h1>Welcome to the game</h1>
            <h1>Get to 100</h1>

            <div className='prevPlayers'>
                {addNewPlayer.map((element, index) => (
                    <PrevPlayers key={index} currentPlayer={element}
                        setSelectPlayers={setSelectPlayers} />
                ))}
            </div>

            <div className='login1' style={{ display: chooseStartGame ? "block" : "none" }}>
                <h2>Login</h2>
                <label>
                    UserName:
                    <input type='text' value={userName} onChange={(event) => setUserName(event.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />
                <button onClick={checkLocalStorage}>add New Player</button>
                <button onClick={() => { setChooseStartGame(false); setUpdateName(true); }}>Finish registration</button>
            </div>
            {updateName && <StartGame
                selectPlayers={selectPlayers}
                chooseStartGame={chooseStartGame} />}
        </div>
    );
}




export default LoginGame;