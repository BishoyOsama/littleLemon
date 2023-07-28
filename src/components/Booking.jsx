import { useState, useReducer, useEffect } from 'react'
import BookingForm from './BookingForm'
import { fetchAPI } from '../bookingApi'

const Booking = () => {
    
    function updateTimes(date) {
        return fetchAPI(date);
    }
    
    const output = fetchAPI(new Date());
    
    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    
  return (
    <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  )
}

export default Booking