import React from 'react'

const Calendar = () => {
  return (
    <div>
      <p>Choose Date and Time</p>
      <div className=' out-of-range:border-red-500 '>
        <form action="/login" method="get">
        <input type="datetime-local" required="required" className=''/>
        </form>
    
      </div>

    </div>
  )
}

export default Calendar