import React from 'react'
import { Link } from 'react-router'

const NavDropdownOpen = ({setNavDropdownOpen}) => {
  return (
    <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 z-20 flex justify-center"
      onMouseLeave={()=> setNavDropdownOpen(false)}
    >
      <div className="flex flex-wrap  md:gap-10 text-gray-700" style={{ fontFamily: 'Poppins' }}>
        <Link to="/categoria/camperas" className='hover:text-[#388da8] px-4 py-2'>
          Camperas
        </Link>
        <Link to="/categoria/buzos" className='hover:text-[#388da8] px-4 py-2'>
          Buzos
        </Link>
        <Link to="/categoria/remeras" className='hover:text-[#388da8] px-4 py-2'>
          Remeras
        </Link>
        <Link to="/categoria/camisas" className='hover:text-[#388da8] px-4 py-2'>
          Camisas
        </Link>
        <Link to="/categoria/pantalones" className='hover:text-[#388da8] px-4 py-2'>
          Pantalones
        </Link>
        <Link to="/categoria/bermudas" className='hover:text-[#388da8] px-4 py-2'>
          Bermudas
        </Link>
        <Link to="/categoria/zapatillas" className='hover:text-[#388da8] px-4 py-2'>
          Zapatillas
        </Link>
        <Link to="/categoria/accesorios" className='hover:text-[#388da8] px-4 py-2'>
          Accesorios
        </Link>
      </div>
    </div>
  )
}

export default NavDropdownOpen;