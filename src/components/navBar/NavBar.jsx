import React from 'react';
import CartWidget from '../cartWidget/CartWidget';

function Navbar() {
  return (
    <div className='bg-white/60 flex items-center py-3 px-4 md:px-14 font-semibold fixed top-0 w-full z-10 backdrop-blur-sm'>
      <div className='w-1/4'>
        <h1 className='md:text-3xl font-bold text-[#388da8]' style={{fontFamily:'Righteous'}}>TrendyLooks</h1>
      </div>
      
      <div className='w-1/2 flex justify-center items-center'>
        <ul className='flex justify-between items-center gap-2 md:gap-16' style={{fontFamily: 'Poppins'}}>
          <li className='hover:text-[#388da8]'>Inicio</li>
          <li className='hover:text-[#388da8]'>Productos</li>
          <li className='hover:text-[#388da8]'>Contacto</li>
        </ul>
      </div>

      <CartWidget/>
    </div>
  )
}

export default Navbar;