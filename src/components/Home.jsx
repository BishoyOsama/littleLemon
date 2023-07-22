import React from 'react'
import Hero from './Hero'
import Offers from './Offers'
import cake from '../assets/lemon dessert.jpg'
import salad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
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
    </>
  )
}

export default Home