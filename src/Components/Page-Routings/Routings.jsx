import { Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../Page-Layout/Pages/Home/Home"
import StudentBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Student-Benifits/StudentBenifits";
import EnterprisesBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Enterprises-Benifits/EnterprisesBenifits";
import EducatorBenifits from "../Page-Layout/Pages/Home/BenifitTabs/BenifitContents/Educator-Benifits/EducatorBenifits";

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
          </Routes>
        </Router>
      </div>
    );
}

export default Routings;  