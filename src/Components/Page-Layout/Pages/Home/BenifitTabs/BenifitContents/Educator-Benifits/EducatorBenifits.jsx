import "./EducatorBenifits.css"
import BulletList from "../../../../../../Re-Used/BulletList/BulletList";

function EducatorBenifits() {

    const benifits = {
        title: 'BENIFITS TO EDUCATORS',

        benifitList : [
            'Teach from anywhere.',
            'Get a steady stream of income.',
            'Manage your time towards a well-balanced life.',
            'Make an impact.'
        ],

        action : 'Apply'
    }

    const get_Action =()=> {
        console.log('Apply button Clicked')
    }
    

    return (
      <div className="EducatorBenifits">
          <BulletList Title={benifits.title} List={benifits.benifitList} Visible={1} Action={benifits.action} Get_Action={get_Action}></BulletList>
      </div>
    );
}

export default EducatorBenifits;