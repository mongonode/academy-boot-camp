import "./DataBox.css"

const DataBox =( props )=> {
    return (
        <div className="DataBox px-3 py-3">
            <h3>{props.Title}</h3>
            <p>{props.Content}</p>
        </div>
    )
}

export default DataBox