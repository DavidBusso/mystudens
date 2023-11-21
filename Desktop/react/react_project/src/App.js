import React, { useState } from 'react';
import KeyboardPanel from './keyboard/keyboardPanel';
import LoginGame from './game/loginGame';
import './App.css';


function App() {
  let [chooseComponent, setChooseComponent] = useState();
  const changeComponent = (action) => {
    setChooseComponent(action);
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type='button' value={"keyboard"} onClick={() => changeComponent(<KeyboardPanel />)} />
        <input type='button' value={"game"} onClick={() => changeComponent(<LoginGame />)} />
        {chooseComponent}
      </header>
    </div>
  );
}

export default App;
