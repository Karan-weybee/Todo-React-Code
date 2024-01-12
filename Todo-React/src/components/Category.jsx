import React from 'react';
import { useEffect } from 'react';
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import '../css/Category.scss'

const Category = ({ setCategory,category }) => {
    // setCategory('study')
    useEffect(() => {
        console.log(category)
        document.getElementById('selector').addEventListener('click',(e)=>{
            e.preventDefault();
            
            document.querySelectorAll('.btn').forEach(button => {
                button.style.backgroundColor = 'white';
                button.style.color = '#4223FF';
              });

            e.target.style.backgroundColor = '#4223FF';
            e.target.style.color = 'white';
         })

         if(category == null || category == ''){
            document.querySelectorAll('.btn')[0].style.backgroundColor="#4223FF";
            document.querySelectorAll('.btn')[0].style.color="white";
         }
         else{
         document.getElementsByClassName(category)[0].style.backgroundColor="#4223FF";
         document.getElementsByClassName(category)[0].style.color="white";
        }
    },[]);

    return (
        <>
            <label htmlFor="" className='category-title'>Choose Category</label>
            <div className='selector' id='selector'>
                <button className='study btn' onClick={() => { setCategory("study") }}>
                    <TbSchool className='study-icon' />Study</button>
                <button className='sport btn' onClick={() => { setCategory("sport") }}>
                    <FaTrophy className='sport-icon' />
                    Sport</button>
                <button className='work btn' onClick={() => { setCategory("work") }}>
                    <FaLaptopCode className='work-icon' />Work</button>
            </div>
        </>
    );
}

export default Category;
