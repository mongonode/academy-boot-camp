import "./HoriontalScroller.css"

const HoriontalScroller =( props )=> {

    const chunkSize = 10;
    const chunks = [];

    for ( let i = 0; i < props.List.length; i += chunkSize ) {
        chunks.push(props.List.slice(i, i + chunkSize));
    }

    return (
        <div className="HoriontalScroller">
            <h6>{props.Title}</h6>

            <div className="Side-Scroller bg-light ps-3 pt-3 mb-5">
                {chunks.map((_chunk) => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <ul className="List-Item-Line">
                            {_chunk.map((_line)=> (
                                <li>{_line}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HoriontalScroller