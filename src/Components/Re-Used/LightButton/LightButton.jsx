import "./LightButton.css"

const LightButton =( props )=> {
    return (
        <button className="LightButton" onClick={props.press_Action}>{props.Title}</button>
    )
}

export default LightButton