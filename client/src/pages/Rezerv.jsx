import React from 'react'
import Calendar from "../components/Calendar"
import TableNo from '../components/TableNo'
import Button from 'react-bootstrap/Button';
const rezerv = () => {
  return (
   
    <div>
        <div className='flex items-center  justify-between container'>
            <Calendar/>
            <TableNo/>
            <Button variant="success">Order</Button>
        </div>
    </div>
  )
}

export default rezerv