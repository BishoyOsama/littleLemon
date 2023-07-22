import React ,{useState} from 'react'
import logo from '../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import close from '../assets/icon_menu_close.svg'
import burgerMenu from '../assets/🦆 icon _hamburger menu.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
        <nav className='w-full mt-5 flex justify-between items-center px-5 xl:px-0 mb-3'>
            <div className='logo'>
                <img src={logo} alt="logo" className='w-full lg:w-56'/>
            </div>
            <ul className='w-1/2 lg:flex hidden justify-evenly items-baseline font-karla font-bold'>
                <li>
                    <NavLink exact="true" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" to="/booking">
                        Reservations
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Order Online
                    </NavLink>
                </li>
                <li className='bg-olive px-3 py-1 rounded-full text-white outline outline-1 outline-lemon outline-offset-1 hover:bg-lemon hover:outline-olive hover:text-black cursor-pointer'>
                    <NavLink>
                        Login
                    </NavLink>
                </li>
            </ul>

            <div className='flex lg:hidden flex-1 justify-end items-centers fixed inset-y-0 right-0'>
                <img src={toggle? close : burgerMenu} alt="toggleMenu" 
                className='w-[40px] h-[20px] object-contain z-10 fixed top-7 right-1'
                onClick={() => setToggle(prevToggle => !prevToggle)}/>

                <div className={`${toggle? 'flex' : 'hidden'} w-[60vw] h-[100vh] 
                bg-olive bg-opacity-75  justify-center items-center`}>
                    <ul className='w-1/2 text-white md:text-[28px] font-karla font-bold flex flex-col gap-y-5 absolute bottom-80 md:bottom-96'>
                        <li>
                            <NavLink exact="true" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact="true" to="/booking">
                                Reservations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                Order Online
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='bg-olive px-3 py-1 rounded-full text-white outline outline-1 outline-lemon outline-offset-1 hover:bg-lemon hover:outline-olive hover:text-black cursor-pointer'>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar