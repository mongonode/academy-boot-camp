import "./VerticalGrid.css"
import { useState, useEffect } from "react"
import DataBox from "../DataBox/DataBox"

const VerticalGrid =()=> {

    const[clicked, setClicked] = useState([true, false, false, false, false, false])

    const click_Action =(id)=> {
        asign_Clicked(id);
    }

    const asign_Clicked =(selected)=> {
        const newClicked = [false, false, false, false, false, false];
        newClicked[selected-1] = true;
        setClicked(newClicked);
    }

    const titleButtons = [
        {id:1, title:'CODING', action:''},
        {id:2, title:'QUALITY', action:''},
        {id:3, title:'DESIGN', action:''},
        {id:4, title:'DATA', action:''},
        {id:5, title:'CYBER SECURITY', action:''},
        {id:6, title:'TECH SALES', action:''},
    ]

    const tranings = [
        {
            title:'WEB DEVELOPMENT – FOUNDATION',
            detail:'Learn foundational web development skills.'
        },

        {
            title:'WEB DEVELOPMENT – ADVANCED',
            detail:'Build powerful commercial web sites, apps'
        },

        {
            title:'SOFTWARE ENGINEERING - FOUNDATION',
            detail:'Se foundation'
        },

        {
            title:'SOFTWARE ENGINEERING',
            detail:'Learn object-oriented programming essentials'
        },
    ]

    return (
        <div className="VerticalGrid">
            <div className="row g-0">
                <div className="col-3">
                    <div className="Main-Buttons">
                        {titleButtons.map((tab) =>(
                            <div key={titleButtons.id} className={clicked[tab.id-1]? "Tab-Button-Clicked":"Tab-Button-Not-Clicked"} type="button" onClick={()=>click_Action(tab.id)}>
                                <div className={clicked[tab.id-1]? "Clicked":"Not-Clicked"}>&nbsp;</div>
                                <div className="Single-Tab">{tab.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-9">
                    <div className="Grid-Contents row g-0">
                        {tranings.map((traning) => (
                            <div className="col-3 px-3 py-3">
                                <DataBox Title={traning.title} Content={traning.detail}></DataBox>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default VerticalGrid