import React from 'react'
import mario from '../assets/Mario and Adrian A.jpg'
import adrain from '../assets/Mario and Adrian b.jpg'

const About = () => {
  return (
    <div className='mt-10 md:mt-20 lg:mt-32 xl:mt-24 flex text-center lg:text-left lg:p-6 xl:p-0'>
        <div className='md:w-full lg:w-1/2 flex flex-col gap-y-5'>
            <div className='flex flex-col gap-y-1'>
                    <h1 className='text-lemon font-serif text-[3rem] lg:text-[4.5rem]'>Little Lemon</h1>
                    <h6 className='text-black font-serif text-[1.5rem] lg:text-[2rem]'>Chicago</h6>
            </div>
            <p className='w-[90%] font-semibold text-gray-500 mx-auto lg:mx-0 text-[0.8rem] lg:text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Porro tempore ab sit dicta temporibus debitis inventore aspernatur molestias ea voluptatum ducimus blanditiis officia numquam harum, 
            nostrum enim alias ullam quasi qui. Eum necessitatibus nesciunt minima debitis eius consectetur porro qui. 
            Quasi quaerat dolor debitis expedita voluptate corrupti ducimus, deserunt a.</p>
        </div>
        <div className='w-1/2 h-[400px] hidden lg:flex'>
            <div className='w-full relative h-full'>
                <img src={mario} alt="Mario and Adrian" className='absolute right-0 top-0 lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[400px]'/>
                <img src={adrain} alt="Mario and Adrian" className='absolute top-28 lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[400px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About