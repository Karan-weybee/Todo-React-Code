import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello world"
    }],
    tempTodos: [{
        id: 1,
        text: "Hello world"
    }]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
            state.tempTodos=state.todos
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            const todo = {
                id: action.payload,
                text: action.payload
            }
            state.todos = state.todos.map((prevTodo) => (prevTodo.id == action.payload ? todo : prevTodo))
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer