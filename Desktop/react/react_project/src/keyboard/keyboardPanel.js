import React, { useState } from "react";
import Screen from "./screen";
import KeyBoard from "./keyboard";
import Buttons from "./button";
import './keyboardPanel.css';
function KeyboardPanel() {
    let [newLetter, setNewLetter] = useState("");
    const changeNewLetter = (event) => setNewLetter(newLetter + event.target.textContent);

    const [chooseLanguage, setChooseLanguage] = useState(false);
    const changeLanguage = () => { setChooseLanguage(!chooseLanguage) }


    const [stateColor, setStateColor] = useState(false);
    const changeStateColor = () => setStateColor(!stateColor);

    const [stateFont, setStateFont] = useState(false);
    const changeStateFont = () => setStateFont(!stateFont);

    const [stateKeyboard, setStateKeyboard] = useState(false);
    const changeStateKeyboard = () => setStateKeyboard(!stateKeyboard);

    const [fontSize, setFontSize] = useState(false);
    const changeFontSize = () => setFontSize(!fontSize);

    const [colorLetters, setColorLetters] = useState(false);
    const changeColorLetters = () => setColorLetters(!colorLetters);

    return (
        <div>
            <Screen
                newLetter={newLetter}
                stateColor={stateColor}
                stateFont={stateFont}
                fontSize={fontSize}
                colorLetters={colorLetters} />
            <KeyBoard
                changeNewLetter={changeNewLetter}
                chooseLanguage={chooseLanguage}
                stateKeyboard={stateKeyboard} />
            <Buttons
                changeStateColor={changeStateColor}
                stateColor={stateColor}
                setNewLetter={setNewLetter}
                newLetter={newLetter}
                changeStateFont={changeStateFont}
                changeNewLetter={changeNewLetter}
                changeLanguage={changeLanguage}
                changeStateKeyboard={changeStateKeyboard}
                chooseLanguage={chooseLanguage}
                changeColorLetters={changeColorLetters}
                colorLetters={colorLetters}
                changeFontSize={changeFontSize} />
        </div>
    )
}
export default KeyboardPanel;