function LetterHebrew(props) {
    let letterHebrewArr = [];
    let letterHebrew = 'א'.charCodeAt(0);
    for (let i = 0; i < 28; i++) {
        letterHebrewArr[i] = String.fromCharCode(letterHebrew);
        letterHebrew++;
    }
    letterHebrewArr[letterHebrewArr.length - 1] = " ";
    let keyboardHebrewArr = "קראטוןםפשדגכעיחלךףזסבהנמצתץ ".split('');
    return (
        <div className="allbuttons"  >
            {props.stateKeyboard ?
                letterHebrewArr.map((value, index) => {
                    return (
                        <button className="button" onClick={(e) => props.changeNewLetter(e)}>
                            <p>{value}</p></button>)
                })
                : keyboardHebrewArr.map((value, index) => {
                    return (
                        <button className="button" onClick={(e) => props.changeNewLetter(e)}>
                            <p>{value}</p></button>)
                })
            }
        </div>
    )
}
export default LetterHebrew;
