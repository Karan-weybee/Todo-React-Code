import { MdArrowBackIosNew } from "react-icons/md";
import React from 'react';

const Back = () => {
    return (
        <>
        <div className="back">
        <MdArrowBackIosNew className="back-icon"/>
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
