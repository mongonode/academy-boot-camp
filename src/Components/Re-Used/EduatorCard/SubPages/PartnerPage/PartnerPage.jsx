import "./PartnerPage.css"
import PageSubtitle from "../../../PageSubtitle/PageSubtitle"
import DarkList from "../../../DarkList/DarkList"
import BulletList from "../../../BulletList/BulletList"
import ImportantBar from "../../../ImportantBar/ImportantBar"
import ContactForm from "../../../ContactForm/ContactForm"

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

    return (
        <div className="PartnerPage">
            <PageSubtitle First={subtitle.first} Highlighted={subtitle.highlight} Last={subtitle.last}></PageSubtitle>

            <div className="row g-0 pb-5 px-4 px-sm-5 px-md-0">
                <div className="col-12 col-md-7 px-md-5 pt-3">
                    <BulletList Title='Our programs, teaches your students/beneficieries various life skills such as:' List={partnerSkills}></BulletList>
                </div>

                <div className="col-12 col-md-5 pe-md-5">
                    <div className="Partner-Offers pt-4 pb-2 px-3">
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