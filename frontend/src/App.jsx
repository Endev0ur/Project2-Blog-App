import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes , Route, Navigate} from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'> 
      <Routes>
        <Route path='/' element={<Navigate to='/signup' />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App