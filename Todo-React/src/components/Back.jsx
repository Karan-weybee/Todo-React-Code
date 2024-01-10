import { MdArrowBackIosNew } from "react-icons/md";
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Back = () => {
    return (
        <>
            <div className="back">
                <Link to="/">
                    <MdArrowBackIosNew className="back-icon" />
                </Link>
                <label htmlFor="" className="new-task">New Task</label>
                <label htmlFor=""></label>
            </div>
            <div className="discription">
                Check Out Some New Colors. Talk With Dany About It.
            </div>
        </>
    );
}

export default Back;
