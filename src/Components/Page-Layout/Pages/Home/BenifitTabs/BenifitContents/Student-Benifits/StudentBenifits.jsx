import "./StudentBenifits.css"
import BulletList from "../../../../../../Re-Used/BulletList/BulletList";

function StudentBenifits() {

    const benifits = {
        title: 'BENIFITS TO STUDENTS',

        benifitList : [
            'Shortest path for a globally rewarding Career in Tech.',
            'Industry focused dynamic skill development.',
            'Affordable learning to be employment ready.'
        ],

        action : 'Register',
    }

    const get_Action =()=> {
        console.log('Register button Clicked')
    }

    return (
        <div className="StudentBenifits">
            <BulletList Title={benifits.title} List={benifits.benifitList} Visible={1} Action={benifits.action} Get_Action={get_Action}></BulletList>
        </div>
    );
}

export default StudentBenifits;