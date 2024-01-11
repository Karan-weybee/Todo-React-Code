import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'
import { todoSelector } from '../features/todo/todoSlice'
import Category from './Category';
import { useState } from 'react';
import '../css/Edit.scss'

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const todos = useSelector(state => todoSelector.singleTodo(state, id));
    const date = todos[0].date;
    const [category, setCategory] = useState(todos[0].category);
    const [text, setText] = useState(todos[0].text);
    const [discription, setDiscription] = useState(todos[0].discription);
    const [priority, setPriority] = useState(todos[0].priority);
    const [dueDate, setDueDate] = useState(todos[0].dueDate);
    const [reminder, setReminder] = useState(todos[0].reminder);
    const dispatch = useDispatch()

    useEffect(() => {

        for (let i = 0; i < 3; i++) {
            if (todos[0].priority == document.querySelectorAll('input[name="priority"]')[i].id) {
                document.querySelectorAll('input[name="priority"]')[i].checked = true
            }
        }
    }, [])

    const editTodoHandler = (e) => {
        e.preventDefault()
        var todo = {
            id: todos[0].id,
            date:date,
            checked:todos[0].checked,
            text: text,
            discription: discription,
            category: category,
            dueDate: dueDate,
            reminder: reminder,
            priority: priority
        }
        console.log(todo)
        dispatch(updateTodo(todo))
        navigate('/');
    }
    return (
        <>
            <Category setCategory={setCategory} category={category} />
            <form className='edit-form' onSubmit={editTodoHandler}>
                <input type="text" name="Title" id="title" placeholder='Enter The Title' value={text} onChange={(e) => setText(e.target.value)} maxlength="25" required />
                <textarea name="discription" id="discription" cols="30" rows="10" placeholder='Enter Discription'
                    value={discription} onChange={(e) => setDiscription(e.target.value)}
                    required></textarea>
                <div className="dueDate-remider">
                    <label htmlFor="" className='dueDate-title'>Set Due Date</label>
                    <label htmlFor="" className='dueDate-title'>Set Reminder</label>
                    <input type="date" name="" id="due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                    <input
                        type="datetime-local"
                        id="remider-date"
                        name="meeting-time" value={reminder} onChange={(e) => setReminder(e.target.value)} required />
                </div>

                {
                    //   document.getElementById(`${todos[0].priority}`).checked = true
                }
                <div className="priority">
                    <div className="high">

                        <input type="radio" id="high" name="priority" value="high"
                            onChange={(e) => setPriority(e.target.value)} required />
                        <label for="high">High</label>
                    </div>
                    <div className="medium">
                        <input type="radio" id="medium" name="priority" value="medium"
                            onChange={(e) => setPriority(e.target.value)} />
                        <label for="medium">Medium</label>
                    </div>
                    <div className="low">
                        <input type="radio" id="low" name="priority" value="low"
                            onChange={(e) => setPriority(e.target.value)} />
                        <label for="low">Low</label>
                    </div>
                </div>
                <button type="submit" id="edit-task">Edit Task</button>
            </form>
        </>
    );
}

export default Edit;
