import React from 'react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <footer className='mt-28 md:mt-[20rem] flex flex-row items-center bg-gray-400 md:bg-inherit p-5 '>
        <div className='w-[100vw] absolute bg-gray-400 h-[60%] lg:h-[40%] left-0 -z-10 hidden md:block'></div>
        <div className='w-[60%] hidden lg:block'>
            <img src={logo} alt="logo" className='w-[70%]' />
        </div>
        <div className='w-full flex flex-col gap-y-5 lg:flex-row lg:gap-x-5'>
            <div className='w-full lg:w-1/4 links'>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>Reservations</li>
                    <li>About</li>
                    <li>Order Online</li>
                    <li>Menu</li>
                </ul>
            </div>
            <div className='w-full lg:w-1/4 links'>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </div>
            <div className='w-full lg:w-1/4 links'>
                <h3>Socail media links</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer