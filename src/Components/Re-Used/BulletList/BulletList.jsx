import "./BulletList.css"
import ActionButton from "../ActionButton/ActionButton"

const BulletList =( props )=> {
    return (
        <div BulletList="ContactForm">
            <div className="Bullet-Box bg-white">
                <h5>{props.Title}</h5>

                <ul className="Bullet-List">
                    { (props.List).map( (bullet) => (
                        <li>{ bullet }</li>
                    ))}
                </ul>

                {props.Visible && (
                    <div className="Align-Benifit-Button">
                        <div className="Benifit-Button">
                            <ActionButton Title={props.Action} press_Action={props.Get_Action}></ActionButton>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default BulletList