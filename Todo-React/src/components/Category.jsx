import React from 'react';
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Category = ({setCategory}) => {


    return (
        <>
        <label htmlFor="" className='category-title'>Choose Category</label>
        <div className='selector'>
            <button className='study' onClick={()=>{setCategory("study")}}>
                <TbSchool className='study-icon' />Study</button>
            <button className='sport' onClick={()=>{setCategory("sport")}}>
                <FaTrophy className='sport-icon' />
                Sport</button>
            <button className='work' onClick={()=>{setCategory("work")}}>
                <FaLaptopCode className='work-icon' />Work</button>
            </div>
        </>
    );
}

export default Category;
