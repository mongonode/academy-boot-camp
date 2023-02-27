import BulletList from "../../../BulletList/BulletList"
import ContactForm from "../../../ContactForm/ContactForm"
import ImportantBar from "../../../ImportantBar/ImportantBar"
import PageSubtitle from "../../../PageSubtitle/PageSubtitle"
import { useEffect } from "react"
import "./TeachPage.css"
import BackButton from "../../../BackButton/BackButton"

const TeachPage =()=> {

    const subtitle = {
        first: 'MAKE YOUR PASSION PAY.',
        highlight: 'UNMATCHED',
        last: 'GROWTH AND EARNINGS.'
    }

    const welcomeBullets = [
        'Are hungry & humble to change lives through Tech education.',
        'Enjoy sharing industry knowledge & support others for a win.',
        'Have outstanding communication skills in two languages. English is a must.',
        'Outstanding skills & discipline to work remotely.'
    ]

    const joinBullets = [
        'Get a steady stream of income.',
        'Manage your time & energy towards a well-balanced life.',
        'Teach/Mentor from anywhere.',
        'Make an impact.'
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="TeachPage">

            <div className="position-fixed">
                <BackButton Title='Bak to Educators'></BackButton>
            </div>

            <div className="TeachTitle">
                <PageSubtitle First={subtitle.first} Highlighted={subtitle.highlight} Last={subtitle.last}></PageSubtitle>
            </div>

            <div className="row g-0 pb-4">
                <div className="col-12 col-md-6 px-3 px-sm-5">
                    <div className="d-flex justify-content-md-center">
                        <BulletList
                                Title='We welcome who:'
                                List={welcomeBullets}>
                        </BulletList>
                    </div>
                </div>

                <div className="col-12 col-md-6 px-3 px-sm-5 pt-3 pt-md-0">
                    <div className="d-flex justify-content-md-center">
                        <BulletList
                                Title='Why should I join +Tech Academy?'
                                Sub_Active = {true}
                                SubTitle='Because we are flexible! If you work with us, you:'
                                List={joinBullets}>
                        </BulletList>
                    </div>
                </div>
            </div>

            <div className="Teach-Important">
                <ImportantBar
                        Title='JOIN AS A TEACHER..!'
                        SubTitle='We’re constantly improving our culture and work processors to keep our teams happy & energized.'
                        Role='TechTEACH'>
                </ImportantBar>
            </div>

            <ContactForm></ContactForm>
        </div>
    )
}

export default TeachPage