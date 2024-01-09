import { useState } from 'react'
import './App.css'
import Back from './components/Back';
import Category from './components/Category';
import Add from './components/Add';
import Title from './components/Title';
import Selector from './components/Selector';
import Todos from './components/Todos';
import Actions from './components/Actions';

function App() {

  return (
    <>
      <div className='main'>
         {/* <Title/>
        <Selector/>
        <Todos/>
        <Todos/>
       <Actions/> */}

        <Back/>
        <Category />
        <Add/>
      </div>
    </>
  )
}

export default App
