import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='xl:max-w-[1300px] w-full flex flex-col items-center mx-auto'>
        <div className='w-full'>
            <Navbar/>
        </div>
        <div className='w-full h-[100vh] flex flex-col justify-between'>
            <Outlet/>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout