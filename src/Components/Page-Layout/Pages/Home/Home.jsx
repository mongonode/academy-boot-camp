import "./Home.css"

import StudentBenifits from "./BenifitTabs/BenifitContents/Student-Benifits/StudentBenifits"
import EnterprisesBenifits from "./BenifitTabs/BenifitContents/Enterprises-Benifits/EnterprisesBenifits"
import EducatorBenifits from "./BenifitTabs/BenifitContents/Educator-Benifits/EducatorBenifits"

import BannerImage from "../../../../Assets/Home-Page/Banner-Image.png"
import ButtonCircle from "../../../../Assets/Home-Page/Button-Circle.png"

import JobsIcon from "../../../../Assets/Home-Page/Jobs-Icon.png"
import DigitalIcon from "../../../../Assets/Home-Page/Digital-Icon.png"
import PayIcon from "../../../../Assets/Home-Page/Pay-Icon.png"

import ContactIcon from "../../../../Assets/Home-Page/Contact.png"
import CallIcon from "../../../../Assets/Home-Page/Call.png"
import WhatsappIcon from "../../../../Assets/Home-Page/Whatsapp.png"
import BenifitBox from "./BenifitTabs/BenifitBox/BenifitBox"

function Home() {

    const to_Learners =()=> {
        //Navigate learners page
    }

    const to_Enterprises =()=> {
        //Navigate Enterprises page
    }

    const to_Educators =()=> {
        //Navigate Educator page
    }

    const contents = [
        {
            title : 'FOR LEARNERS',
            description : 'Springboard your career with jobs of the future',
            function : to_Learners
        },
        {
            title : 'FOR ENTERPRISES',
            description : 'Hire the job ready digital talent',
            function : to_Enterprises
        },
        {
            title : 'FOR EDUCATORS',
            description : 'Build a well-balanced lifestyle',
            function : to_Educators
        },
    ];


    const Roles = [
        {
            image : JobsIcon,
            alt : 'Jobs icon',
            description : 'Get ready for jobs of the future.'
        },
        {
            image : DigitalIcon,
            alt : 'Digital works icon',
            description : 'Hire job ready digital talent.'
        },
        {
            image : PayIcon,
            alt : 'Get payment icon',
            description : 'Make your passion pay'
        },
    ]

    return (
        <div className="Home">
            <div className="Banner">
                <div className="col-11 col-sm-10 col-lg-9 col-xl-8">
                    <div className="row g-0">
                        <div className="col-12 col-sm-4 col-md-5 pe-lg-5">
                            <div className="Baner-Image ms-sm-5 me-lg-5 pe-lg-5">
                                <img src={BannerImage} alt="Banner-Image" />
                            </div>
                        </div>

                        <div className="col-12 col-sm-8 col-md-7">
                            <div className="Banner-Contents pb-3 py-sm-0">
                                { contents.map( (content) => (
                                    <div className="Single-Content my-1 my-sm-3 ms-0 ms-sm-4">
                                        <div className="Content-Box">
                                            <div className="Content-Details">
                                                <div className="Content">
                                                    <h5>{content.title}</h5>
                                                    <h6>{content.description}</h6>
                                                </div>

                                                <img className="Show-More-Button" type="button" onClick={content.function} src={ButtonCircle} alt="Button" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Benifits pt-md-5 pb-md-4 px-xl-2">
                <h4 className="pt-5 pb-2 pb-sm-2 d-md-none">SEE OUR <span>BENIFITS</span> FOR,</h4>

                <div className="row g-0 py-0 px-2 py-lg-4 px-lg-5 d-none d-md-flex">
                    <div className="col-4">
                        <div className="Single-Benifit">
                            <div className="col-11 col-xl-10">
                                <div className="Align-Single-Benifit">
                                    <StudentBenifits></StudentBenifits>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="Single-Benifit">
                            <div className="col-11 col-xl-10">
                                <div className="Align-Single-Benifit">
                                    <EnterprisesBenifits></EnterprisesBenifits>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="Single-Benifit">
                            <div className="col-11 col-xl-10">
                                <div className="Align-Single-Benifit">
                                    <EducatorBenifits></EducatorBenifits>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-block d-md-none px-3">
                    <BenifitBox></BenifitBox>
                </div>
            </div>

            <div className="Our-Role my-5 pt-3 pb-2">
                <h5 className="pb-3 pb-md-5 pt-2 mx-4">WHAT DO <span>WE DO</span> TRIPICALLY OTHERS WON'T DO (OR PERHAPS THEY CAN'T)</h5>

                <div className="row g-0 px-5">
                    { Roles.map((role) => (
                        <div className="col-12 col-md-4">
                            <div className="Single-Role pt-4 pt-md-0">
                                <div className="Role-Circle px-5 pt-2">
                                    <img src={ role.image } alt={ role.alt } />
                                </div>

                                <div className="Role-Description pt-3">
                                    <p>{ role.description }</p>
                                </div>
                            </div>
                        </div>
                    ))}      
                </div>
            </div>

            <div className="Contect-Us">
                <div className="Align-Contact-Box py-3 py-sm-4 py-md-5 px-3 px-sm-4 px-md-5">
                    <div className="Contact-Box">
                        <div className="row g-0 py-3 py-lg-4">
                            <div className="col-12 col-md-6 px-3">
                                <div className="Contact-Title mt-4">
                                    <h4>DIFFICULT TO <span>DESIDE</span>..?</h4>
                                    <p className="pt-2">Connect with our consultants & mentors to learn what is best for you.</p>
                                </div>

                                <div className="Contact-Image py-3 d-none d-md-flex">
                                    <img src={ ContactIcon } alt="Contact Icon" />
                                </div>

                                <div className="Contact-Call pt-3 d-none d-md-flex">
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

                                <div className="Contact-Call pt-3 d-flex d-md-none">
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
    );
}

export default Home;