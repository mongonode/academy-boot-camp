import "./DarkButton.css"

const DarkButton =( props )=> {
    return (
        <button className="DarkButton" onClick={props.press_Action}><span className="d-none d-sm-block">{props.Title}&nbsp;</span>{props.Role}</button>
    )
}

export default DarkButton