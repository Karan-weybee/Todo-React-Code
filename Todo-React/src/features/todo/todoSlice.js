import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Todos: [{
        id: 1,
        text: "Hello world",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperi eligendi necessitatibus tenetur,",
        category: "sport",
        date: "2022-01-12",
        checked: false,
        dueDate: "2022-12-23",
        reminder: "2022-01-12T13:06",
        priority: "high"
    }, {
        id: 2,
        text: "Hello world2",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperi eligendi necessitatibus tenetur,",
        category: "work",
        date: "2021-12-11",
        checked: true,
        dueDate: "2022-12-23",
        reminder: "2022-12-23T13:06",
        priority: "medium"
    }, {
        id: 3,
        text: "Hello world3",
        discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperi eligendi necessitatibus tenetur, ",
        category: "study",
        date: "2021-12-11",
        checked: false,
        dueDate: "2022-12-23",
        reminder: "2022-12-23T13:06",
        priority: "low"
    }]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("added")
            state.Todos.push({...action.payload,id:Date.now(),checked:false})
            state.tempTodos = state.Todos
        },
        removeTodo: (state, action) => {
            state.Todos = state.Todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.Todos = state.Todos.map((prevTodo) => (prevTodo.id == action.payload.id ? action.payload : prevTodo))
        },
        toggleCompleted: (state, action) => {
            state.Todos = state.Todos.map((prevTodo) => (prevTodo.id == action.payload) ? { ...prevTodo, checked: !prevTodo.checked } : prevTodo)
            console.log("toggle")
        }
    }
})

export const todoSelector = {
    filter: (state, actions, category,search,datePicker) => {
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
        if(search != ''){
           todos=todos.filter((todo) =>todo.text.toLowerCase().includes(search.toLowerCase())!=false)
        }
        if(datePicker != ''){
            todos=todos.filter((todo) =>todo.date==datePicker)
        }

        console.log(`${actions},${category}`)
        return todos;
    },

    singleTodo:(state,id)=>{
        const todos = state.Todos.filter((todo) => todo.id == id) 
        return todos;
    }
}

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer