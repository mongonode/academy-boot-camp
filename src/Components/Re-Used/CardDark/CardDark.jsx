import "./CardDark.css"

const CardDark =( props )=> {
    return (
        <div className="CardDark py-3 px-3">
            <h4>{props.Title}</h4>
            <img className="my-3" src={props.CardImage} alt="Card-Image" />
            <h6>{props.Description}</h6>
        </div>
    )
}

export default CardDark