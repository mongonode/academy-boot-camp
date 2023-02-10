import "./EnterprisesBenifits.css"

function EnterprisesBenifits() {

    const benifitList = [
        'Hire job ready tech talent.',
        'Train our community & pick the best.',
        'Transform your employees with digital skills.',
        'Contribute to fill the gap between academia & industry.'
    ];

    return (
      <div className="EnterprisesBenifits">
          <div className="Benifit-Box">
              <h5>BENEFITS TO ENTERPRISES</h5>

              <ul className="Benifit-List">
                  { benifitList.map( (benifit) => (
                      <li>{ benifit }</li>
                  ))}
              </ul>

              <div className="Benifit-Button">
                  <button>Collaborate</button>
              </div>
          </div>
      </div>
    );
}

export default EnterprisesBenifits;