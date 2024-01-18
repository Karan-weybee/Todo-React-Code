import React, { useState } from 'react';
import { BsFillMenuButtonFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
import {todoSelector} from '../features/todo/todoSlice'
import { useSelector,useDispatch } from 'react-redux';
import '../css/Actions.scss'
import AddImage from '../images/plus.png'


const Actions = ({setAction}) => {

    const [mode,setMode]=useState('dark');
 
    function changeMode(){
        console.log("change mode")
        if(mode == 'dark'){
            setMode('white')
            root.style.setProperty('--white','rgb(7, 7, 23)');
            root.style.setProperty('--dark','white');
            root.style.setProperty('--aquablue','rgb(18, 18, 48)');
            root.style.setProperty('--secondary-colour','aliceblue');
            root.style.setProperty('--ccc','#a79d9d');
            document.querySelector('body').style.backgroundColor='white'
        }
        else{
            setMode('dark')
            root.style.setProperty('--white','white');
            root.style.setProperty('--dark','rgb(7, 7, 23)');
            root.style.setProperty('--aquablue','aliceblue');
            root.style.setProperty('--secondary-colour','rgb(18, 18, 48)');
            root.style.setProperty('--ccc','#ccc');
            document.querySelector('body').style.backgroundColor='rgb(7, 7, 23)'
        }
    }
    return (
        <div className="actions">
            <div className="menu">
                <button class="dropbtn"><BsFillMenuButtonFill class="menu-icon" /></button>
                <div class="dropdown-content">
                    <a href="#" onClick={()=>setAction("all")}>ALL</a>
                    <a href="#" onClick={()=>setAction("active")}>ACTIVE</a>
                    <a href="#" onClick={()=>setAction("completed")}>COMPLETED</a>

                </div>
            </div>
            <div>
                <Link to="/add"> 
                    {/* <GrAdd className='add-icon' /> */}
                    <img src={AddImage} alt="" className='add-icon'/>
                </Link>
            </div>
            <div id='change-mode' onClick={changeMode}>
                <MdDarkMode className='mode-icon' />
            </div>
        </div>
    );
}

export default Actions;
