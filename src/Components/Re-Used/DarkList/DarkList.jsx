import "./DarkList.css"

const DarkList =( props )=> {
    return (
        <div className="DarkList">
            <div className="Dark-Box">
                <h5>{props.Title}</h5>

                <ul className="Dark-List">
                    { (props.List).map( (bullet) => (
                        <li>{ bullet }</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DarkList