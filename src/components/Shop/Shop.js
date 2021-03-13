import React, { useEffect, useState } from 'react';
import fakeCourses from '../../fakeCourses.json';
import Course from '../Course/Course';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        setCourse(fakeCourses);
    },[])

    const handleAdd = (pd) =>{
        const newCart = [...cart, pd];
        setCart(newCart)
        console.log('added',pd)
    }

    console.log(cart)

    return (
        <div>
           <div className="top">
           <div className="intro">
            <h2>App Development Courses</h2>
            <h5 className='category'>App Development relates to <span>Development, IT and Software</span></h5>
            <h6><FontAwesomeIcon icon = {faUserFriends}></FontAwesomeIcon>  <small>3583672 learners</small></h6>
            </div>

            <div className="cart">
                
                <Cart cart = {cart}></Cart>
            </div>
           </div>

            <div className="main">
                <h2>Courses to get you started</h2>
                <div className='row d-flex'>
                {
                    course.map(title =><Course oneCourse = {title} handleAdd= {handleAdd} key= {course.id}></Course>)
                }
                </div>
            </div>
        </div>
    );
};

export default Shop;