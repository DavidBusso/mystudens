function Screen(props) {
    return (
        <div className="textarea">
            <textarea rows="15" cols="50" value={props.newLetter}
                style={{
                    color: props.stateColor ?  "#2980B9":"red",
                    fontFamily: props.stateFont ? "Garamond" : "Arial",
                    fontSize: props.fontSize ? "50px" : "100px",
                }}>
            </textarea>
        </div>
    )
}
export default Screen;