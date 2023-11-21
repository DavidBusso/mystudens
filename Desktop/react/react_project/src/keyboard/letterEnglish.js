function LetterEnglish(props) {
    let letterEnglishArr = [];
    let letterEnglish = 97
    for (let i = 0; i < 27; i++) {
        letterEnglishArr[i] = String.fromCharCode(letterEnglish);
        letterEnglish++;
    }
    letterEnglishArr[letterEnglishArr.length - 1] = " ";
    let keyboardEnglishArr = "qwertyuiopasdfghjklzxcvbnm ".split('');
    return (
        <div className="allbuttons"  >
            {props.stateKeyboard ?
                letterEnglishArr.map((value, index) => {
                    return (
                        <button className="button" onClick={(e) => props.changeNewLetter(e)} >
                            <p>{value}</p></button>)
                })
                : keyboardEnglishArr.map((value, index) => {
                    return (
                        <button className="button" onClick={(e) => props.changeNewLetter(e)} >
                            <p>{value}</p></button>
                    )
                })
            }
        </div>
    );
}
export default LetterEnglish;