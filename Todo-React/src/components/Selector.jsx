import React from 'react';
import { useEffect } from 'react';
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import '../css/Selector.scss'


const Selector = ({setCategory}) => {
    useEffect(() => {
        document.getElementById('selector').addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(e.target)
            document.querySelectorAll('.btn').forEach(button => {
                button.style.backgroundColor = 'white'; 
                button.style.color = 'black';
              });

            e.target.style.backgroundColor = 'var(--secondary-colour)';
            e.target.style.color = 'var(--white)';
         })
    },[]);
    return (
        <div className='selector' id='selector'>
            <button className='all btn' onClick={()=>setCategory("all")}>ALL</button>
            <button className='study btn' onClick={()=>setCategory("study")}>
                <TbSchool className='study-icon' />Study</button>
            <button className='sport btn'  onClick={()=>setCategory("sport")}>
                <FaTrophy className='sport-icon' />
                Sport</button>
            <button className='work btn'  onClick={()=>setCategory("work")}>
                <FaLaptopCode className='work-icon' />Work</button>
        </div>
    );
}

export default Selector;
