import React from 'react';
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

const Selector = () => {
    return (
        <div className='selector'>
            <button className='all'>ALL</button>
            <button className='study'>
                <TbSchool className='study-icon' />Study</button>
            <button className='sport'>
                <FaTrophy className='sport-icon' />
                Sport</button>
            <button className='work'>
                <FaLaptopCode className='work-icon' />Work</button>
        </div>
    );
}

export default Selector;
