import React from 'react'
import Hero from './Hero'
import Offers from './Offers'
import Testimonials from './Testimonials'
import cake from '../assets/lemon dessert.jpg'
import salad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Hero/>
        <section className='xl:w-full w-[95%] flex flex-col gap-y-5 mt-20 mx-auto'>
            <div className='flex flex-col md:flex-row text-center gap-y-4 p-3 justify-between'>
                <h1 className=' md:text-4xl font-semibold font-serif'>This week specials</h1>
                <button className='bg-lemon rounded-lg px-10 py-3 md:text-xl font-semibold hover:bg-olive hover:text-white'>Online Menu</button>
            </div>
            <div className='flex justify-around flex-col md:flex-row gap-y-5 gap-x-5 lg:gap-x-10'>
                <Offers img={salad} name={'Greek salad'} price={'$12.99'}/>
                <Offers img={bruchetta} name={'Bruchetta'} price={'$8.00'}/>
                <Offers img={cake} name={'Lemon Cake'} price={'$15.00'}/>
            </div>
        </section>
        <section className='mt-28 lg:mt-52 xl:mt-32 flex flex-col items-center justify-center gap-y-10 bg-gray-400 md:bg-none p-4 md:p-0'>
          <div className='w-[100vw] absolute bg-gray-400 h-[60%] lg:h-[40%] left-0 -z-10 hidden md:block'></div>
          <h1 className='font-semibold text-4xl font-serif'>Testimonials</h1>
          <div className='flex flex-col gap-y-5 md:flex-row md:flex-wrap lg:flex-nowrap justify-center lg:gap-x-0 xl:gap-x-5'>
            <Testimonials/>
            <Testimonials/>
            <Testimonials/>
            <Testimonials/>
          </div>
        </section>
        <About/>
    </>
  )
}

export default Home