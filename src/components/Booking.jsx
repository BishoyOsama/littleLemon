import { useState } from "react"
import Bookingslot from "./Bookingslot"

const Booking = () => {
    const [resData, setResData] = useState({
        res_date: '',
        res_time: '',
        no_guests: '',
        occasion_type: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setResData({
            ...resData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(resData)
    }

  return (
    <>
        <div className="flex w-full ">
            <form className='w-1/2 flex flex-1 flex-col items-center gap-y-10 text-center mt-20' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="res-date" className='font-serif font-semibold text-olive'>Choose date</label>
                    <input type="date" id="res-date" 
                    name="res_date" value={resData.res_date} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="res-time" className='font-serif font-semibold text-olive'>Choose time</label>
                    <select id="res-time" name="res_time" 
                    value={resData.res_time} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}>
                        <option value="">time?</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                        <option value="22:00">22:00</option>
                    </select>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="guests" className='font-serif font-semibold text-olive'>Number of guests</label>
                    <input type="number" placeholder='1' min='1' max='10' id='guests' 
                    name="no_guests" value={resData.no_guests} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="occasion" className='font-serif font-semibold text-olive'>Occasion</label>
                    <select name="occasion_type" id="occasion" 
                    value={resData.occasion_type} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}>
                        <option value="">occasion?</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <input type="submit" value="Make Your reservation" className='text-white font-bold bg-olive px-4 py-1 rounded-full
                outline outline-lemon -outline-offset-4 hover:text-black
                hover:outline-olive hover:bg-lemon text-[1rem] lg:text-[1.3rem]'/>
            </form>
            <div className="w-1/2 flex flex-col justify-center items-center gap-y-5">
                <h1 className="text-[1.4rem] text-olive font-serif font-semibold ">Available tables</h1>
                <Bookingslot/>
            </div>
        </div>
    </>
  )
}

export default Booking