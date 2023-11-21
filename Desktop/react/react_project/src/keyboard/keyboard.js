import LetterEnglish from "./letterEnglish";
import LetterHebrew from "./letterHebrew";
function KeyBoard(props) {
    // const [state, setState] = useState(false);
    // const changeState = () => setState(!state);
    return (
        <div>

            {props.chooseLanguage ? <LetterEnglish changeNewLetter={props.changeNewLetter}
                stateKeyboard={props.stateKeyboard} />
                : <LetterHebrew changeNewLetter={props.changeNewLetter}
                    stateKeyboard={props.stateKeyboard} />}

        </div>

    )

}
export default KeyBoard;