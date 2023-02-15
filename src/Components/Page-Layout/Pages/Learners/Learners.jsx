import PageTitle from "../../../Re-Used/PageTitle/PageTitle";
import BulletList from "../../../Re-Used/BulletList/BulletList";
import "./Learners.css"
import VerticalGrid from "../../../Re-Used/VerticalGrid/VerticalGrid";
import ContactForm from "../../../Re-Used/ContactForm/ContactForm";

function Learners() {

    const title = {
        first: 'MEANINGFUL ALTERNATIVE TO',
        highlight:'ACCELERATE',
        next:'YOUR SUCCESS IN THE',
        last:'DIGITAL WORLD'
    }

    const benifits = {
      title: 'WHY ENROLL ?',

      benifitList : [
          'Connect with a community of techies who are happy for each other’s success.',
          'We help our students to build a globally rewarding digital skillset.',
          "You want to change your career path but can't leave your current job until you get ready? Don’t worry, get ready for your next job without leaving your current job.",
          'We offer affordable fees with multiple payment options.'
      ],
    }

    return (
      <div className="Learners">
          <div className="row g-0 Title-Learners">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mx-3 mb-4 mx-sm-5 mb-sm-5 mx-md-0 mb-md-0 pt-5 pb-4 px-5 bg-white">
                      <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                  </div>
              </div>  
          </div>

          <div className="Tranings px-5 py-5 ">
              <VerticalGrid></VerticalGrid>
          </div>

          <ContactForm></ContactForm>
      </div>
    );
}

export default Learners;