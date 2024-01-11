import { MdArrowBackIosNew } from "react-icons/md";
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Discription from "./Discription";
import '../css/Back.scss'

const Back = ({text}) => {
    return (
        <>
            <div className="back">
                <Link to="/">
                    <MdArrowBackIosNew className="back-icon" />
                </Link>
                <label htmlFor="" className="new-task">{text} Task</label>
                <label htmlFor=""></label>
            </div>
            {
                text == "New"&&(
                    <Discription/>
                )
            }
        </>
    );
}

export default Back;
