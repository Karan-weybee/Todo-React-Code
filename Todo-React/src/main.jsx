import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import './add.scss'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Back from './components/Back';
import Category from './components/Category';
import Add from './components/Add';
import Title from './components/Title';
import Selector from './components/Selector';
import Todos from './components/Todos';
import Actions from './components/Actions';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<><Title />
        <Todos />
        </>} />
      <Route path='add' element={<><Back />
        <Add /></>} />

    </Route>
  ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
