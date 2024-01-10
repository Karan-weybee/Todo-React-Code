import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Todos: [{
        id: 1,
        text: "Hello world",
        discription: "hello",
        category: "sport",
        date: "2022-1-12",
        checked: false,
        dueDate: "2022-12-23",
        reminder: "05:30 2022-12-12",
        priority: "high"
    }, {
        id: 2,
        text: "Hello world2",
        discription: "hello2",
        category: "work",
        date: "2021-12-11",
        checked: true,
        dueDate: "2022-12-23",
        reminder: "05:30 2022-12-12",
        priority: "medium"
    }, {
        id: 3,
        text: "Hello world3",
        discription: "hello2",
        category: "study",
        date: "2021-12-11",
        checked: false,
        dueDate: "2022-12-23",
        reminder: "05:30 2022-12-12",
        priority: "low"
    }]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                text: action.payload.text,
                discription: action.payload.discription,
                category: action.payload.category,
                date: action.payload.date,
                checked: false,
                dueDate: action.payload.dueDate,
                reminder: action.payload.reminder,
                priority: action.payload.priority
            }
            console.log("added")
            state.Todos.push(todo)
            state.tempTodos = state.Todos
        },
        removeTodo: (state, action) => {
            state.Todos = state.Todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            const todo = {
                id: action.payload,
                text: action.payload
            }
            state.Todos = state.Todos.map((prevTodo) => (prevTodo.id == action.payload ? todo : prevTodo))
        },
        toggleCompleted: (state, action) => {
            state.Todos = state.Todos.map((prevTodo) => (prevTodo.id == action.payload) ? { ...prevTodo, checked: !prevTodo.checked } : prevTodo)
            console.log("toggle")
        }
    }
})

export const todoSelector = {
    filter: (state, actions, category) => {
        var todos;
        if (actions == "active") {
            todos = state.Todos.filter((todo) => todo.checked == false)
        }
        else if (actions == "completed") {
            todos = state.Todos.filter((todo) => todo.checked == true)
        }
        else {
            todos = state.Todos.filter((todo) => todo.checked == false || todo.checked == true)
        }

        if(category != "all"){
            todos=todos.filter((todo) =>todo.category==category)
        }
        console.log(`${actions},${category}`)
        return todos;
    }
}

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer