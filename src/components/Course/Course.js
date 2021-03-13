import React from 'react';
import './Course.css'

const Course = (props) => {
    const{course_name,created_by,price,img} = props.oneCourse;
    
    return (
        <div className= "course-style">
            <img src={img} alt=""/>
            <h6>{course_name}</h6>
            <h6><small>Created by : {created_by}</small></h6>
            <h5>$ {price}</h5>
            <button onClick={()=>props.handleAdd(props.oneCourse)} className="btn btn-success">Add to Cart</button>
        </div>
    );
};

export default Course;