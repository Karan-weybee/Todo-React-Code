import React from 'react';
import { BsFillMenuButtonFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
import {todoSelector} from '../features/todo/todoSlice'
import { useSelector,useDispatch } from 'react-redux';


const Actions = ({setAction}) => {

    // const xyz = useSelector((state)=>todoSelector.filter(state,"all"))

    // console.log(xyz)
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
                    <GrAdd className='add-icon' />
                </Link>
            </div>
            <div>
                <MdOutlineDarkMode className='mode-icon' />
            </div>
        </div>
    );
}

export default Actions;
