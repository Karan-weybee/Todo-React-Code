import React from 'react';
import { BsFillMenuButtonFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";

const Actions = () => {
    return (
        <div className="actions">
            <div className="menu">
                <button class="dropbtn"><BsFillMenuButtonFill class="menu-icon" /></button>
                <div class="dropdown-content">
                    <a href="#">ALL</a>
                    <a href="#">ACTIVE</a>
                    <a href="#">COMPLETED</a>

                </div>
            </div>
            <div>
                <GrAdd className='add-icon' />
            </div>
            <div>
                <MdOutlineDarkMode className='mode-icon' />
            </div>
        </div>
    );
}

export default Actions;
