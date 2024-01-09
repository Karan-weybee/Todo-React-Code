import React, { useState } from 'react';
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";

const Todos = () => {
    const [todos, setTodos] = useState([{ id: 1 }, { id: 2 }, { id: 3 }])

    return (
        <div className="todos">

            <div className='date'>
                <div className='date'>Today 21 Aug 2018</div>
            </div>
            {todos.map((todo) => (
                <div className='todo' key={todo.id}>
                    <div className='list'>
                        <input type="checkbox" className='checkbox' name="" />
                        <label>Todo list is now available</label>
                        <button className='more'><TfiMoreAlt className='more-icon'/></button>
                    </div>
                    <div className='action'>
                        <label htmlFor="" className='time'>
                            <IoMdStopwatch className='watch-icon' />
                            <label htmlFor="" className='times'>11:00</label>
                            <IoNotifications className='notification-icon' />
                            <MdDelete className='delete-icon'/>
                        </label>
                        <label htmlFor="" className='activity'>
                            {todo.id % 2 == 0 ? <><FaTrophy className='sport-icon' />Sport</>
                                : <><TbSchool className='study-icon' />Study</>}

                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todos;
