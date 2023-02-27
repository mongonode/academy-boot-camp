import "./PartnerPage.css"
import PageSubtitle from "../../../PageSubtitle/PageSubtitle"
import DarkList from "../../../DarkList/DarkList"
import BulletList from "../../../BulletList/BulletList"
import ImportantBar from "../../../ImportantBar/ImportantBar"
import ContactForm from "../../../ContactForm/ContactForm"
import BackButton from "../../../BackButton/BackButton"
import { useEffect } from "react"

const PartnerPage =()=> {

    const subtitle = {
        first: 'IMPLEMENT OUR',
        highlight: 'CAREER TRACK',
        last: 'PROGRAMS AT YOUR SCHOOL/ ORGANIZATION/ COMMUNITY.'
    }

    const services = [
        'Updated curriculum which aligns with the global industry demands.',
        'Provide competent Facilitators/Teachers in the absence of teachers.',
        'Training your staff / ICT teachers / volunteers / undergraduates to excel at teaching.'
    ]

    const partnerSkills = [
        'Problem Solving: Divide a problem statement into sub statements to cover all the edge cases.',
        'Creativity: Build programs, presentations, animations, and games etc. which foster creativity.',
        'Logical Thinking: Think systematically and logically since if the sequence goes wrong, the whole code can fall apart.'
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="PartnerPage">

            <div className="position-fixed">
                <BackButton Title='Bak to Educators'></BackButton>
            </div>

            <PageSubtitle First={subtitle.first} Highlighted={subtitle.highlight} Last={subtitle.last}></PageSubtitle>

            <div className="row g-0 pb-5 px-3 px-sm-5 px-md-0">
                <div className="col-12 col-md-7 px-md-5 pt-3">
                    <BulletList Title='Our programs, teaches your students/beneficieries various life skills such as:' List={partnerSkills}></BulletList>
                </div>

                <div className="col-12 col-md-5 pe-md-5 pt-3 pt-md-0">
                    <div className="Partner-Offers pt-3 pt-sm-4 pb-1 pb-sm-2 px-2">
                        <DarkList Title='The services +Tech Academy offers' List={services}></DarkList>
                    </div>
                </div>
            </div>

            <ImportantBar
                Title='HOW TO SET UP..?'
                SubTitle='Any school / organization / club or even an enthusiastic individual can registered with +Tech Academy.'
                Role='TechPARTNER'>
            </ImportantBar>

            <ContactForm></ContactForm>
        </div>
    )
}

export default PartnerPage