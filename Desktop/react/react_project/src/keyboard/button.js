function Buttons(props) {
    return (
        <div className="buttons">
            <input type="button" onClick={props.changeStateColor}
                value={props.stateColor ? "change all to red" : "change all to blue"}></input>
            <input type="button" onClick={props.changeColorLetters}
                value={props.colorLetters ? "change to red" : "change to blue"}></input>
            <input type="button"
                onClick={() => { props.setNewLetter(props.newLetter.slice(0, props.newLetter.length - 1)) }}
                value={"delete"}></input>
            <input type="button"
                onClick={() => { props.setNewLetter("") }}
                value={"clear"}></input>
            <input type="button" onClick={props.changeStateFont}
                value={"font"}></input>
            <input
                type="button"
                onClick={props.changeLanguage}
                value={!props.chooseLanguage ? "English" : "Hebrew"}></input>
            <input
                type="button"
                onClick={props.changeStateKeyboard}
                value={"select Keyboard"}></input>
            <input
                type="button"
                onClick={props.changeFontSize}
                value={"select fontsize"}></input>
        </div>
    )
}
export default Buttons;