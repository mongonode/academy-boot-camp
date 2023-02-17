import "./Course.css"
import { useLocation } from 'react-router-dom';
import CourseData from "../../../../Static-Database/CourseData/CourseData";

function Course() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const _categoryELEMENT = searchParams.get('category')-1;
    const _courseELEMENT = searchParams.get('course')-1;

    const dataSet = CourseData[_categoryELEMENT].courses[_courseELEMENT]

    return (
        <div className="Course">
            <button onClick={()=> console.log(dataSet)}>ddd</button>
        </div>
    )
    
}

export default Course