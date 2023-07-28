import { useRef, useState } from "react"
import Bookingslot from "./Bookingslot"

const BookingForm = (props) => {
    const [resData, setResData] = useState({
        res_date: '',
        no_guests: '',
        occasion_type: ''
    })

    const [times, setTimes] = useState(
        props.availableTimes.map((time, index) => <option value={time}>{time}</option>)
    )
    const button = useRef()

    const handleChange = (e) => {
        const {name, value} = e.target
        setResData({
            ...resData,
            [name]: value
        })
        if(value === ''){
            button.setAttribute("disabled", "")
        }else{
            button.removeAttribute("disabled")
        }
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
                    <input type="date" id="res-date"  required
                    name="res_date" value={resData.res_date}
                    className='outline outline-2 outline-lemon px-3 py-1
                    rounded-full focus:outline-none focus:outline-olive
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="res-time" className='font-serif font-semibold text-olive'>Choose time</label>
                    <select id="res-time" name="res_time" required 
                    value={times} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}>
                        <option value="">time?</option>
                        {times}
                    </select>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="guests" className='font-serif font-semibold text-olive'>Number of guests</label>
                    <input type="number" placeholder='1' min='1' max='10' id='guests'  required
                    name="no_guests" value={resData.no_guests} 
                    className='outline outline-2 outline-lemon px-3 py-1 
                    rounded-full focus:outline-none focus:outline-olive 
                    text-center uppercase text-olive italic cursor-pointer'
                    onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <label htmlFor="occasion" className='font-serif font-semibold text-olive'>Occasion</label>
                    <select name="occasion_type" id="occasion"  required
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
                <input type="submit" id="submit" value="Make Your reservation" className='text-white font-bold bg-olive px-4 py-1 rounded-full
                outline outline-lemon -outline-offset-4 hover:text-black
                hover:outline-olive hover:bg-lemon text-[1rem] lg:text-[1.3rem]' ref={button} disabled={resData.no_guests === '' || resData.occasion_type === '' || resData.res_date === ''}/>
            </form>
            <div className="w-1/2 flex-col justify-center items-center gap-y-5 hidden md:flex">
                <h1 className="text-[1.4rem] text-olive font-serif font-semibold ">Available tables</h1>
                <Bookingslot/>
            </div>
        </div>
    </>
  )
}

export default BookingForm