import "./AboutUs.css"
import PageTitle from "../../../Re-Used/PageTitle/PageTitle";
import CardLight from "../../../Re-Used/CardLight/CardLight";
import Vision from "../../../../Assets/Others/Vision.png"
import CardDark from "../../../Re-Used/CardDark/CardDark";

function AboutUs() {
    return (
      <div className="AboutUs">
          <div className="row g-0">
      	      <div className="col-4">
                  <PageTitle Highlight='+Tech Academy' Next='is focused to up skill anyone with Tech Talent with a growth mindset.'></PageTitle>
              </div>

              <div className="col-8 d-flex align-items-center">
                  <div className="Vision">
                      <div className="row g-0 d-flex">
                          <div className="col-6 ps-4 pe-2">
                              <CardLight Title='Our Vision' CardImage={Vision} Description='Change lives by being the most trusted source of training and employment.'></CardLight>
                          </div>

                          <div className="col-6 pe-4 ps-2">
                              <CardDark Title='Our Mission' CardImage={Vision} Description='Build a community of job ready digital talent who are happy for each other’s success.'></CardDark>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default AboutUs;