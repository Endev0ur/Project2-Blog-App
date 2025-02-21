import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes , Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import ReadBlog from './pages/ReadBlog'
import UpdateBlog from './pages/UpdateBlog'
import UserDashboard from './pages/UserDashboard'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'> 
      <Routes>
        <Route path='/' element={<Navigate to='/signup' />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/create' element={<CreateBlog />}></Route>
        <Route path='/readme' element={<ReadBlog />}></Route>
        <Route path='/update' element={<UpdateBlog />}></Route>
        <Route path='/profile' element={<UserDashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App