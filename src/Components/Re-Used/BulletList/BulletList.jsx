import "./BulletList.css"
import ActionButton from "../ActionButton/ActionButton"

const BulletList =( props )=> {
    return (
        <div BulletList="ContactForm">
            <div className="Bullet-Box bg-white">
                <h5 className="ms-1 ms-sm-0">{props.Title}</h5>

                {props.Sub_Active && ( <p className="ms-1 ms-sm-0">{props.SubTitle}</p> )}

                <ul className="Bullet-List">
                    { (props.List).map( (bullet) => (
                        <li className="me-1">{ bullet }</li>
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