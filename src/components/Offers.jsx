import React from 'react'


const Offers = (props) => {
  return (
    <div className='w-[95%] mx-auto md:mx-0 md:w-1/3 bg-gray-200 rounded-xl'>
        <div className='w-full h-[40%] lg:h-[50%]'>
            <img src={props.img} alt="" className='w-full h-full object-cover rounded-t-xl' />
        </div>
        <div className='flex flex-col gap-y-4 p-5'>
            <div className='flex justify-between'>
                <h6 className='font-bold text-[0.9rem] md:text-[1rem]'>{props.name}</h6>
                <p className='text-orange-400 font-semibold text-[0.9rem] md:text-[1rem]'>{props.price}</p>
            </div>
            <p className='text-gray-400 text-[0.9rem] md:text-[1rem]'>Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Accusantium nesciunt nemo fugit. 
            Adipisci, quibusdam atque?</p>
            <a href="" className='font-semibold hover:text-orange-400 w-fit text-[0.9rem] md:text-[1rem]'>Order a delivery</a>
        </div>
    </div>
  )
}

export default Offers