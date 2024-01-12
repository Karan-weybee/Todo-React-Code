import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { TbSchool } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdBorderBottom, MdDelete } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleCompleted } from '../features/todo/todoSlice'
import Actions from './Actions';
import Selector from './Selector';
import { todoSelector } from '../features/todo/todoSlice'
import '../css/Todos.scss'
import { BiMessageSquareDetail } from "react-icons/bi";
import Title from './Title';

function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const formattedDate = `${day} ${months[parseInt(month, 10) - 1]} ${year}`;

    return formattedDate;
}



function filterTodo(todos) {
    const dates = new Set(todos.map(todo => todo.date));
    const dateArray = Array.from(dates);
    var helperTodo = {};

    dateArray.map((date) => {
        var filteredTodos = todos.filter(todo => todo.date === date);
        helperTodo[date] = filteredTodos
    })
    return helperTodo;
}
function reminder(reminder) {
    const reminderTime = reminder.split('T');
    const dateParts = reminderTime[0].split('-');
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]} ${reminderTime[1]}`
}
function setOpacity(checked){
  if(checked){
    return 0.7;
  }
  return 1;
}
function Todos() {
    const dispatch = useDispatch()
    const [category, setCategory] = useState("all");
    const [action, setAction] = useState("all")
    const [search, setSearch] = useState('');
    const [datePicker, setDatePicker] = useState('');
    console.log("date :- " + datePicker)
    const TempTodos = useSelector((state) => todoSelector.filter(state, action, category, search, datePicker))
    console.log(TempTodos)
    // const todos = useSelector(state => state.Todos)
    const filterTodos = filterTodo(TempTodos);
    console.log(filterTodos)
    return (
        <>
            <Title setSearch={setSearch} search={search} setDatePicker={setDatePicker} datePicker={datePicker} />
            <Selector setCategory={setCategory} />
            <div className="filters">
                {action != 'all' && (
                    <div className="action-filter">{action}
                        <button className='action-filter-remove' onClick={() => { setAction('all') }}>X</button>
                    </div>
                )}
                {
                    datePicker != '' && (
                        <div className="date-filter">{datePicker}
                            <button className='date-filter-remove' onClick={() => { setDatePicker('') }}>X</button>
                        </div>
                    )
                }

            </div>
            <div className="todos">
                {Object.keys(filterTodos).map((key) => (
                    <>
                        <div className='date'>
                            <div className='date'>{formatDate(key)}</div>
                        </div>
                        <div className="todo-list">
                            {filterTodos[key].map((todo) => (
                                <>
                                  
                                    <div className={`todo ${todo.priority}`} key={todo.id} style={{ opacity: setOpacity(todo.checked) }}>
                                        <div className='list'>
                                            <input type="checkbox" className='checkbox' name=""
                                                checked={todo.checked} onChange={() => dispatch(toggleCompleted(todo.id))} />
                                            <label>
                                                {
                                                    todo.checked == true && (
                                                        <del>{todo.text}</del>
                                                    )}
                                                {
                                                    todo.checked == false && (
                                                        <>{todo.text}</>
                                                    )
                                                }
                                            </label>
                                            <button className='more'>
                                                {/* <TfiMoreAlt className='more-icon' /> */}
                                                <BiMessageSquareDetail className='more-icon' />
                                                <div class="dropup-content">
                                                    <Link to={`/edit/${todo.id}`} id="details">Details</Link>
                                                    <Link to="/edit">Edit</Link>
                                                    {/* <a href="#">Link 3</a> */}
                                                </div>
                                            </button>
                                        </div>
                                        <div className="discription">
                                            {todo.discription}
                                        </div>
                                        <div className='action'>
                                            <label htmlFor="" className='time'>
                                                <IoMdStopwatch className='watch-icon' />
                                                <label htmlFor="" className='times'>{reminder(todo.reminder)}</label>
                                                <IoNotifications className='notification-icon' />
                                                <MdDelete className='delete-icon' onClick={() => dispatch(removeTodo(todo.id))} />
                                            </label>
                                            <label htmlFor="" className='activity'>
                                                {

                                                    todo.category == "work" && (
                                                        <> <FaLaptopCode className='work-icon' />Work</>
                                                    ) ||
                                                    todo.category == "sport" && (
                                                        <> <FaTrophy className='sport-icon' />Sport</>
                                                    ) ||
                                                    todo.category == "study" && (
                                                        <> <TbSchool className='study-icon' />Study</>
                                                    )
                                                }

                                                {/* <FaTrophy className='sport-icon' />Sport */}
                                                {/* <TbSchool className='study-icon' />Study */}
                                            </label>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </>
                ))}

            </div>
            <Actions setAction={setAction} />
        </>
    );
}

export default Todos;
