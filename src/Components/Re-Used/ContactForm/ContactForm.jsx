import "./ContactForm.css"
import ContactIcon from "../../../Assets/Home-Page/Contact.png"
import CallIcon from "../../../Assets/Home-Page/Call.png"
import WhatsappIcon from "../../../Assets/Home-Page/Whatsapp.png"

const ContactForm =( props )=> {
    return (
        <div className="ContactForm">
            <div className="Contect-Us">
                <div className="Align-Contact-Box py-3 py-sm-4 py-md-5 px-3 px-sm-4 px-md-5">
                    <div className="Contact-Box">
                        <div className="row g-0 py-3 py-lg-4">
                            <div className="col-12 col-md-6 px-3">
                                <div className="Contact-Title mt-4">
                                    <h4>DIFFICULT TO <span>DESIDE</span>..?</h4>
                                    <p className="pt-2">{props.SubTitle}</p>
                                </div>

                                <div className="Contact-Image py-3 d-none d-md-flex">
                                    <img src={ ContactIcon } alt="Contact Icon" />
                                </div>

                                <div className="Talk-With-Us d-none d-md-block">
                                    <p>{props.ContactTitle} <span>{props.Email}</span></p>

                                    <div className="Contact-Call">
                                        <div className="Call">
                                            <img src={ CallIcon } alt="" />
                                            <p>0742833337</p>
                                        </div>

                                        <p className="px-sm-3">|</p>

                                        <div className="Call">
                                            <img src={ WhatsappIcon } alt="" />
                                            <p>0742833337</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ps-xl-5">
                                <form className="py-3 p-2 py-sm-4 px-sm-3 my-4 mx-3 me-md-4 me-lg-5">
                                    <div className="Input-Fields">
                                        <div className="row g-0">
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                <div className="Single-Input px-1">
                                                    <label For="">Name</label>
                                                    <input type="text" placeholder="Your name"></input>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                <div className="Single-Input px-1">
                                                    <label For="">E mail</label>
                                                    <input type="text" placeholder="Your e-mail"></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                <div className="Single-Input px-1">
                                                    <label For="">Phone</label>
                                                    <input type="text" placeholder="Your phone number"></input>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                <div className="Single-Input px-1">
                                                    <label For="">Whatsapp</label>
                                                    <input type="text" placeholder="Your whatsapp number"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <label className="mx-1" htmlFor="">Message</label>
                                    <textarea type="text" placeholder="Type your message" className="mx-1" name="" id="" cols="34" rows="3"></textarea>
                                   
                                    <button className="mx-1 mt-3">SEND US</button>
                                </form>
                                <div className="Talk-With-Us d-block d-md-none">
                                    <p>{props.ContactTitle} <span>{props.Email}</span></p>
                                
                                    <div className="Contact-Call">
                                        <div className="Call">
                                            <img src={ CallIcon } alt="" />
                                            <p>0742833337</p>
                                        </div>

                                        <p className="px-2">|</p>

                                        <div className="Call">
                                            <img src={ WhatsappIcon } alt="" />
                                            <p>0742833337</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm