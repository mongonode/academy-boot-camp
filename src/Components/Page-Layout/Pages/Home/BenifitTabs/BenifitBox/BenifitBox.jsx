import "./BenifitBox.css"
import { Link, Outlet } from "react-router-dom"

function BenifitBox() {
    return (
      <div className="BenifitBox mx-0 mx-sm-4 mb-4 mb-sm-5">
          <div className="">
              <div className="col-12">
                  <div className="row g-0 Tabs">
                      <div className="col-4 d-flex justify-content-center">
                          <Link className="Tab-Link" to=''>STUDENTS</Link>
                      </div>

                      <div className="col-4 d-flex justify-content-center">
                          <Link className="Tab-Link" to='enterprises-benifits'>ENTERPRISES</Link>
                      </div>

                      <div className="col-4 d-flex justify-content-center">
                          <Link className="Tab-Link" to='educator-benifits'>EDUCATORS</Link>
                      </div>
                  </div> 
              </div>

              <div className="col-12">
                  <div className="Benifit-Tabs px-4 py-4">
                      <Outlet></Outlet>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default BenifitBox;