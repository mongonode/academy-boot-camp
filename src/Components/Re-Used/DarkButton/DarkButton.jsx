import "./DarkButton.css"

const DarkButton =( props )=> {
    return (
        <button className="DarkButton" onClick={props.press_Action}>{props.Title}</button>
    )
}

export default DarkButton