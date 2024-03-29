import React, { useState,useEffect } from 'react';
import Category from './Category';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import '../css/Add.scss'
import {useNavigate} from 'react-router-dom';

function setTodayDate(){
  var month = `${new Date().getMonth()+1}`;
  if(month.length<2){
    month = `0${month}`;
  }
  var date = `${new Date().getDate()}`;
  if(date.length<2){
    date = `0${date}`;
  }
  return `${new Date().getFullYear()}-${month}-${date}`
}
const Add = () => {
  const [category, setCategory] = useState('');
  const [text, setText] = useState();
  const [discription, setDiscription] = useState();
  const [priority, setPriority] = useState();
  const [dueDate, setDueDate] = useState();
  const [reminder, setReminder] = useState();
  console.log(reminder)
  const dispatch = useDispatch()
  const navigate = useNavigate();

 const addTodoHandler = (e) => {
    e.preventDefault()
    // setInput('')
    const date = setTodayDate();
    var todo ={
      text: text,
      discription: discription,
      category: category,
      date: date,
      dueDate: dueDate,
      reminder: reminder,
      priority: priority
    }
    console.log(todo)
    dispatch(addTodo(todo))

    console.log(Math.floor((new Date(reminder) - new Date())));
    setTimeout(showNotification,Math.floor((new Date(reminder) - new Date())));
    navigate('/');
  }
  function showNotification() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {

      var notification = new Notification("Reminder For Todo Task", {
        body: `This is a notification For your Todo Task`
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          var notification = new Notification("Reminder For Todo Task", {
            body: `This is a notification For your Todo Task`
          });
        }
      });
    }
  }

  return (
    <div className='add-section'>
      <Category setCategory={setCategory} category={category} />
      <form className='add-form' onSubmit={addTodoHandler}>
        <input type="text" name="Title" id="title" placeholder='Enter The Title' value={text} onChange={(e) => setText(e.target.value)} maxlength="25" required/>
        <textarea name="discription" id="discription" cols="30" rows="10" placeholder='Enter Discription'
          value={discription} onChange={(e) => setDiscription(e.target.value)}
        required></textarea>
        <div className="dueDate-remider">
          <label htmlFor="" className='dueDate-title'>Set Due Date</label>
          <label htmlFor="" className='dueDate-title'>Set Reminder</label>
          <input type="date" name="" id="due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required/>
          <input
            type="datetime-local"
            id="remider-date"
            min={new Date()}
            name="meeting-time" value={reminder} onChange={(e) => setReminder(e.target.value)} required/>
        </div>
        <div className="priority">
          <div className="high">
            <input type="radio" id="html" name="priority" value="high" onChange={(e) => setPriority(e.target.value)} required/>
            <label for="html">High</label></div>
          <div className="medium">
            <input type="radio" id="css" name="priority" value="medium" onChange={(e) => setPriority(e.target.value)}/>
            <label for="css">Medium</label></div>
          <div className="low">
            <input type="radio" id="javascript" name="priority" value="low" onChange={(e) => setPriority(e.target.value)}/>
            <label for="javascript">Low</label></div>
        </div>
        <button type="submit" id="add-task">Add Task</button>
      </form>
    </div>
  );
}

export default Add;
