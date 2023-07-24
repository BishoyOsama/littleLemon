import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import chef1 from '../assets/chef1.jpg'


const Testimonials = () => {
  return (
    <div className='bg-white flex flex-col items-center gap-y-5 w-[85%] md:w-[40%] lg:w-[23%] mx-auto  
    xl:mx-0 xl:w-1/4 p-3 rounded-xl'>
        <div className='flex flex-row gap-x-1'>
            <FontAwesomeIcon icon={faStar} style={{color: "#ffdf3d",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ffdf3d",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ffdf3d",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ffdf3d",}} />
            <FontAwesomeIcon icon={faStar} style={{color: "#ffdf3d",}} />
        </div>
        <div className='flex justify-center gap-x-2'>
            <img src={chef1} alt="chef" className='w-1/6 aspect-square object-cover rounded-lg'/>
            <div className='flex flex-col gap-y-1 font-semibold capitalize font-serif'>
                <h3>first name</h3>
                <h4 className='text-sm'>last name</h4>
            </div>
        </div>
        <p className='text-gray-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Veritatis odit facilis explicabo quasi molestiae esse!</p>
    </div>
  )
}

export default Testimonials