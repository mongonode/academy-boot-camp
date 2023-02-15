import "./Educators.css"
import PageTitle from "../../../Re-Used/PageTitle/PageTitle";
import BulletList from "../../../Re-Used/BulletList/BulletList";

function Educators() {

  const title = {
    first: 'MAKE YOUR',
    highlight:'PASSION PAY.',
    next:'UNLIMITED GROWTH',
    last:'AND EARNINGS'
  }

  
  const benifits = {
    title: 'WE WELCOME, WHO :',

    benifitList : [
        'Are hungry & humble to change lives through Tech education.',
        'Enjoy sharing industry knowledge & support others for a win.',
        'Have outstanding communication skills in two languages. English is a must.',
        "Ability to plan, organize and coordinate with others with minimum supervision.",
        'Outstanding skills & discipline to work remotely.'
    ],
  }

    return (
      <div className="Educators">
          <div className="row g-0">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mx-4 mb-4 mx-sm-5 mb-sm-5 mx-md-0 mb-md-0 pt-5 pb-4 ps-5 bg-white">
                        <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                        <div className="d-none d-lg-block">
                            {/* <img src={} alt="Enroll-Image"/> */}
                        </div>
                  </div>
              </div>  
          </div>
      </div>
    );
}

export default Educators;