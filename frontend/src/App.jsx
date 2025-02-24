import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes , Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import ReadBlog from './pages/ReadBlog'
import UpdateBlog from './pages/UpdateBlog'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoutes from './utils/ProtectedRoutes'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'> 
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/create' element={<CreateBlog />}></Route>
        <Route path='/readme' element={<ReadBlog />}></Route>
        <Route path='/update' element={<UpdateBlog />}></Route>

        <Route path='/profile' element={
          <ProtectedRoutes>
            <UserDashboard /> 
          </ProtectedRoutes>
          }>
        </Route>
        <Route path="/admin" element={
          <ProtectedRoutes>
          <AdminDashboard />
         </ProtectedRoutes>}></Route>
        </Routes>
    </div>
  )
}

export default App