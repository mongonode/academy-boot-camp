import "./EnterprisesBenifits.css"
import BulletList from "../../../../../../Re-Used/BulletList/BulletList";

function EnterprisesBenifits() {

    const benifits = {
        title: 'BENIFITS TO ENTERPRISES',

        benifitList : [
            'Hire job ready tech talent.',
            'Train our community & pick the best.',
            'Transform your employees with digital skills.',
            'Contribute to fill the gap between academia & industry.'
        ],

        action : 'Collaborate'
    }

    const get_Action =()=> {
        console.log('Collaborate button Clicked')
    }

    return (
      <div className="EnterprisesBenifits">
          <BulletList Title={benifits.title} List={benifits.benifitList} Visible={1} Action={benifits.action} Get_Action={get_Action}></BulletList>
      </div>
    );
}

export default EnterprisesBenifits;