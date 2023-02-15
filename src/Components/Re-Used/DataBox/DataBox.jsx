import "./DataBox.css"

const DataBox =( props )=> {
    return (
        <div className="DataBox">
            <div>
                <h3 className="mt-3">{props.Title}</h3>
                <h4>{props.SubTitle}</h4>
            </div>
            
            <p className="px-2">{props.Content}</p>
        </div>
    )
}

export default DataBox