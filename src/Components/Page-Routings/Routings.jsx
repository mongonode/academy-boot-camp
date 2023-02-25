import { Routes, HashRouter as Router, Route} from "react-router-dom";
import Home from "../Page-Layout/Pages/Home/Home"
import StudentBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Student-Benifits/StudentBenifits";
import EnterprisesBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Enterprises-Benifits/EnterprisesBenifits";
import EducatorBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Educator-Benifits/EducatorBenifits";
import Learners from "../Page-Layout/Pages/Learners/Learners";
import Educators from "../Page-Layout/Pages/Educators/Educators"
import Enterprises from "../Page-Layout/Pages/Enterprises/Enterprises";
import AboutUs from "../Page-Layout/Pages/AboutUs/AboutUs";
import Course from "../Page-Layout/Pages/Learners/Course/Course";
import TeachPage from "../Re-Used/EduatorCard/SubPages/TeachPage/TeachPage";
import MentorPage from "../Re-Used/EduatorCard/SubPages/MentorPage/MentorPage";
import PartnerPage from "../Re-Used/EduatorCard/SubPages/PartnerPage/PartnerPage";

function Routings() {
    return (
      <div className="Routings">
        <Router>
          <Routes>
            <Route path='/' element={ <Home/> }>
                <Route path='/' element={ <StudentBenifits/> }></Route>
                <Route path='/enterprises-benifits' element={ <EnterprisesBenifits/> }></Route>
                <Route path='/educator-benifits' element={ <EducatorBenifits/> }></Route>
            </Route>

            <Route path='/learners' element={<Learners/>}></Route>
            <Route path='/selected-course' element={<Course/>}></Route>
            <Route path='/educators' element={<Educators/>}></Route>
            <Route path='/enterprises' element={<Enterprises/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/teach' element={<TeachPage/>}></Route>
            <Route path='/mentor' element={<MentorPage/>}></Route>
            <Route path='/partner' element={<PartnerPage/>}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default Routings;