import React from 'react'
import '../spinner/spinner.css'

function Spinner() {
  return (
    <div className='md:mt-10 bg-white min-h-screen flex justify-center items-center'>
      <span className="loader"></span>
    </div>
  )
}

export default Spinner