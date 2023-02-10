import "./EducatorBenifits.css"

function EducatorBenifits() {

    const benifitList = [
        'Teach from anywhere.',
        'Get a steady stream of income.',
        'Manage your time towards a well-balanced life.',
        'Make an impact.'
    ];

    return (
      <div className="EducatorBenifits">
          <div className="Benifit-Box bg-white">
              <h5>BENEFITS TO EDUCATORS</h5>

              <ul className="Benifit-List">
                  { benifitList.map( (benifit) => (
                      <li>{ benifit }</li>
                  ))}
              </ul>

              <div className="Benifit-Button">
                  <button>Apply</button>
              </div>
          </div>
      </div>
    );
}

export default EducatorBenifits;