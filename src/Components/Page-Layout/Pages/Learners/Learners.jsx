import PageTitle from "../../../Re-Used/PageTitle/PageTitle";
import BulletList from "../../../Re-Used/BulletList/BulletList";
import "./Learners.css"
import VerticalGrid from "../../../Re-Used/VerticalGrid/VerticalGrid";
import ContactForm from "../../../Re-Used/ContactForm/ContactForm";
import Enroll from "../../../../Assets/Learners-Page/Enroll.png"
import Guidence from "../../../../Assets/Learners-Page/Guidence.png"

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

    const guidence = [
        'Build a 1:1 Job search strategy',
        'Resume & cover letters',
        'Interview preparation',
        'Salary negotiation',
        'LinkedIn profile',
        'Attend online career discussions to meet other students, interact with mentors, resolve burning career issues, and broaden your understanding of the field.'
    ]

    const pageLinks = [
        {
            title: 'FIND WORK',
            navigate:[
                {
                    name:'TechJobz.co - Source Sri lanka’s top tech talent.',
                    link:'https://www.techjobz.co/'
                },

                {
                    name:'TechJobz.co - Source Sri lanka’s top tech talent.',
                    link:'https://www.techjobz.co/'
                },

                {
                    name:'TechJobz.co - Source Sri lanka’s top tech talent.',
                    link:'https://www.techjobz.co/'
                },

                {
                    name:'TechJobz.co - Source Sri lanka’s top tech talent.',
                    link:'https://www.techjobz.co/'
                },

                {
                    name:'TechJobz.co - Source Sri lanka’s top tech talent.',
                    link:'https://www.techjobz.co/'
                }
            ]
        },

        {
            title: 'LEARN FREE',
            navigate:[
                {
                    name:'Bento - Learn to code and be a self-taught expert developer',
                    link:'https://bento.io/'
                },

                {
                    name:'CareerFoundry | The Online School for Your Career in Tech',
                    link:'https://careerfoundry.com/'
                },

                {
                    name:'Bento - Learn to code and be a self-taught expert developer',
                    link:'https://bento.io/'
                },

                {
                    name:'CareerFoundry | The Online School for Your Career in Tech',
                    link:'https://careerfoundry.com/'
                },
            ]
        },
    ]

    return (
      <div className="Learners">
          <div className="row g-0 Title-Learners">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mx-4 mb-4 mx-sm-5 mb-sm-5 mx-md-0 mb-md-0 pt-4 pb-3 pt-sm-5 pb-sm-4 ps-4 pe-4 ps-sm-5 pe-sm-4 bg-white">
                        <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                        <div className="d-none d-lg-block">
                            <img src={Enroll} alt="Enroll-Image"/>
                        </div>
                  </div>
              </div>  
          </div>

          <div className="Tranings px-2 px-sm-5 pt-5 pb-2">
                <h2 className="mb-4 text-center">EXPLORE OUR <span>JOB FOCUSED</span> TRANINGS</h2>
              <VerticalGrid></VerticalGrid>
          </div>

          <div className="Pages px-4 px-sm-5 pt-3 pb-4  py-md-5 mt-5 mb-3">
            <div className="row">
                { pageLinks.map((link) => (
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <div className="Link-Box px-4 pt-3 pb-2">
                            <h5>{link.title}</h5>

                            <ul className="Page-Link-List">
                                {link.navigate.map((target) => (
                                    <li>{target.name}&nbsp;-&nbsp;<a href={target.link}>visit</a></li>
                                ))}
                            </ul> 
                        </div>
                    </div>
                ))}   
            </div>
          </div>

          <div className="Guidence-Services pt-3 py-4 my-4">
                <div className="row">
                    <div className="col-12 col-md-7 px-4 px-sm-5 Guidence-Box">
                        <div className="Guidence-Description">
                            <h2>CAREER <span>GUIDANCE SERVICES</span> FOR OUR STUDENTS</h2>
                            <p>We provide career preparation for all our students who are successfully complete the training within the allocated timeframe. Our career services team will help you for 6 months in the job search process.</p>
                        </div>
                        
                        <div className="ps-5">
                            <img src={Guidence} alt="Guidence-Image" />
                        </div>
                    </div>

                    <div className="col-12 col-md-5 px-4 px-sm-5 px-md-0 pe-md-5 py-4 py-md-0">
                        <div className="Guidence-List px-3 pt-2 mt-0 mt-md-4">
                            <BulletList List={guidence}></BulletList>
                        </div>
                    </div>
                </div>
          </div>

            <ContactForm 
                SubTitle='Drop a message. You will be contacted by our mentors.' 
                ContactTitle='OR feel free to talk to us and decide.'>
            </ContactForm>
      </div>
    );
}

export default Learners;