import React from 'react'
import { Link } from 'react-router-dom'
import restaurantFood from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <>
    <div className='absolute bg-olive w-[100vw] h-[21rem] lg:h-[32vh] xl:h-[45vh] left-0 -z-10'></div>
        <main className='w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left z-10 lg:px-6 xl:px-0'>
            <div className='w-full lg:w-1/2 flex flex-col gap-y-5'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-lemon font-serif text-[3rem] lg:text-[4.5rem]'>Little Lemon</h1>
                    <h6 className='text-white font-serif text-[1.5rem] lg:text-[2rem]'>Chicago</h6>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <p className='max-w-[30rem] lg:w-[60%] mx-auto lg:mx-0 text-white text-[0.8rem] lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Neque enim sunt eius nisi nihil dolorum, ullam ipsum culpa quae corrupti laboriosam ipsam error 
                    maiores obcaecati odio ratione consectetur unde placeat.</p>
                    <Link to={`/booking`}>
                        <button className='text-white font-bold bg-olive px-4 py-1 rounded-full
                        outline outline-lemon -outline-offset-4 hover:text-black
                        hover:outline-olive hover:bg-lemon text-[0.9rem] lg:text-[1rem]'>
                        Reserve a Table
                        </button>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 hidden lg:flex flex-col items-center relative top-8 '>
                <img src={restaurantFood} alt="food" 
                className='w-[400px] h-[420px] rounded-2xl object-fill'/>
            </div>
        </main>
    </>
  )
}

export default Hero