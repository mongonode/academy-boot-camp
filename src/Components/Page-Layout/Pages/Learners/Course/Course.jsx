import "./Course.css"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import CourseData from "../../../../Static-Database/CourseData/CourseData";
import InputField from "../../../../Re-Used/InputField/InputField";
import RadioInput from "../../../../Re-Used/RadioInput/RadioInput";
import SubmitButton from "../../../../Re-Used/SubmitButton/SubmitButton";

function Course() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const _categoryELEMENT = searchParams.get('category')-1;
    const _courseELEMENT = searchParams.get('course')-1;

    const dataSet = CourseData[_categoryELEMENT].courses[_courseELEMENT]
    const courseName = dataSet.title + '-' + ' (' + dataSet.level + ')';

    const[formData, setFormData] = useState ({
                                                title:courseName,
                                                name:'',
                                                phone:'',
                                                whatsapp:'',
                                                payment:null
                                            })

    const inputs = [
        {
            id:1,
            name:'title',
            label:'Course Title',
            type:'text',
            placeholder:'Your name',
            disable:true
        },

        {
            id:2,
            name:'name',
            label:'Name',
            type:'text',
            placeholder:'Your name',
            disable:false
        },

        {
            id:3,
            name:'phone',
            label:'Phone',
            type:'text',
            placeholder:'Your phone number',
            disable:false
        },

        {
            id:4,
            name:'whatsapp',
            label:'Whatsapp',
            type:'text',
            placeholder:'Your whatsapp number',
            disable:false
        },
    ]

    const payments = [
        {
            id:1,
            label:'Full pay',
            value:'full'
        },

        {
            id:2,
            label:'Installment',
            value:'installment'
        },
    ]

    return (
        <div className="Course px-5 py-5">
            <div className="Course-Title">
                <h2>{dataSet.title} - {dataSet.level}</h2>
            </div>

            <div className="Course-Description">
                <p>{dataSet.description}</p>
            </div>

            <div className="row g-0">
                <div className="col-7">
                    <div className="Course-Information">
                        <div className="Join-Course">
                            <h6>WHO CAN JOIN ?</h6>
                            <p>{dataSet.join}</p>
                        </div>

                        <div className="Course-Details">
                            <div className="row g-0">
                                <div className="col-6">
                                    <div className="Detail-Set">
                                        <h6>Duration : <span>{dataSet.duration}</span></h6>
                                        <h6>Method : <span>{dataSet.method}</span></h6>
                                        <h6>Language : <span>{dataSet.language}</span></h6>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="Detail-Set">
                                        <h6>Attendance : <span>{dataSet.attendance}</span></h6>
                                        <h6>Course Fee : <span>Rs.{dataSet.fee}</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-5">
                    <div className="Apply-Form">
                        <form action="">
                            <div className="Apply-Course-Field">

                                 {inputs.map((field) => (
                                    <div className="pt-1">
                                        <InputField 
                                            Label={field.label}
                                            Type={field.type}
                                            Value={formData[field.name]}
                                            Placeholder={field.placeholder}
                                            Disable={field.disable}
                                            Entered={(e)=> setFormData({...formData, [field.name]:e.target.value})}>
                                        </InputField>
                                    </div>
                                 ))}

                                 <div className="Payment-Type">
                                    <div className="row g-0">
                                        {payments.map((pay) => (
                                            <div className="col-6">
                                                <RadioInput 
                                                    Label={pay.label}
                                                    Value={pay.value}
                                                    Checked={formData.payment === pay.value}
                                                    Marked={(e)=> setFormData({...formData, payment:e.target.value})}>
                                                </RadioInput>
                                            </div>
                                        ))}
                                    </div>
                                 </div>
                            </div>

                            <div className="">
                                <SubmitButton Title='REGISTER NOW'></SubmitButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <button onClick={()=> console.log(formData)}>ffff</button>
        </div>
    )
    
}

export default Course