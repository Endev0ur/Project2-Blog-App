import React from 'react'
import NavBar from './NavBar'
import Content from './Content'

const Home = () => {
  return (
    <div className="h-full lg:h-[100%] w-[98%] bg-amber-300 flex flex-col wrap">
      <div className='h-1/12 w-[100%] bg-red-300'>
        <NavBar></NavBar>
      </div>
      <div className='h-[90%] w-full'>
        <Content></Content>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home