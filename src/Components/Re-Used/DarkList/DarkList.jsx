import "./DarkList.css"

const DarkList =( props )=> {
    return (
        <div className="DarkList">
            <div className="Dark-Box">
                <h5 className="ms-1 ms-sm-0">{props.Title}</h5>

                <ul className="Dark-List">
                    { (props.List).map( (bullet) => (
                        <li className="me-1">{ bullet }</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DarkList