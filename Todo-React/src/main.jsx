import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import './add.scss'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Back from './components/Back';
import Add from './components/Add';
import Title from './components/Title';
import Todos from './components/Todos';
import Edit from './components/Edit.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<>
        <Todos />
        </>} />
      <Route path='add'
       element={<><Back text="New"/><Add /></>} />
      <Route path='edit/:id' element={<><Back text="Edit"/><Edit/></>} />
    </Route>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
