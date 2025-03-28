import React from 'react';
import { Link } from 'react-router';
import CartWidget from '../cartWidget/CartWidget';

function Navbar() {  
  return (
    <div className='bg-white/75 flex items-center py-5 md:py-3  px-3 md:px-14 font-semibold fixed top-0 w-full z-10 backdrop-blur-sm shadow-md'>
      <div className='w-1/4'>
        <h1 className='text-md md:text-3xl font-bold text-[#388da8]' style={{fontFamily:'Righteous'}}>
          TrendyLooks
        </h1>
      </div>
      
      <div className='w-full md:w-1/2 flex justify-center items-center text-sm md:text-base'>
        <ul className='flex justify-between items-center gap-2 md:gap-16 text-gray-700' style={{fontFamily: 'Poppins'}}>
          <Link to="/" className='hover:text-[#388da8]'>
            Inicio
          </Link>          
          <Link to="/categoria/camperas" className='hover:text-[#388da8]'>
            Camperas
          </Link>
          <Link to="/categoria/buzos" className='hover:text-[#388da8]'>
            Buzos
          </Link>          
        </ul>
      </div>
      
      <div className='w-1/4 md:p-1 md:py-2 flex justify-end text-xl'>
        <Link to="/carrito">
          <CartWidget/>
        </Link>
      </div>      
    </div>
  )
}

export default Navbar;