import "./StudentBenifits.css"

function StudentBenifits() {

    const benifitList = [
        'Shortest path for a globally rewarding Career in Tech.',
        'Industry focused dynamic skill development.',
        'Affordable learning to be employment ready.'
    ]

    return (
      <div className="StudentBenifits">
          <div className="Benifit-Box">
              <h5>BENEFITS TO STUDENTS</h5>

                <ul className="Benifit-List">
                    { benifitList.map( (benifit) => (
                        <li>{ benifit }</li>
                    ))}
                </ul>

                <div className="Benifit-Button">
                    <button>Register</button>
                </div>
            </div>
        </div>
    );
}

export default StudentBenifits;