import React, { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import {useAppContext } from '../../context/context';

function CartWidget(){
  const {carrito} = useAppContext()  
  
  return (
    <>
      <BsCart3 className='transition-transform duration-100 ease-in-out text-gray-500 hover:text-[#388da8] transform hover:scale-110'/>      
      <div className='absolute bottom-8 right-10 bg-[#388da8] text-white transition-transform duration-100 ease-in-out transform hover:scale-110 text-xs rounded-full w-5 h-5 flex items-center justify-center'>
        <p>{carrito.length}</p>
      </div>      
    </>  
  )
}

export default CartWidget;