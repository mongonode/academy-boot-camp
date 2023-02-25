import "./PageSubtitle.css"

const PageSubtitle =( props )=> {
    return (
        <div className="PageSubtitle mb-5">
            <div className="Align-Subtitle pt-5 pb-5 px-5">
                <h1 className="mt-2">{props.First} <span>{props.Highlighted}</span> {props.Last}</h1>
            </div>
        </div>
    )
}

export default PageSubtitle