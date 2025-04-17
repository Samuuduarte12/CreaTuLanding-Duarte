import React from 'react'
import { useAppContext } from '../../context/context'

function Cart() {
  const {carrito, setCarrito} = useAppContext()

  function eliminarDelCarrito(id) {
    const newCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(newCarrito);
  }
  
  return (        
    carrito.length > 0 ?
      <div className='mt-20'>        
        <h1 className='text-sx text-center px-5 md:px-0 md:text-xl text-gray-700 font-bold m-5'>Productos del carrito</h1>
        <div className='flex flex-col justify-center items-center gap-3'>
          {carrito.map((carro)=>{
            return(              
              <div className='flex items-center gap-4 bg-white shadow-2xl p-2 w-1/2 rounded-xl'>
                <div className="flex items-center justify-center h-[200px] md:h-[120px] md:w-[120px]">
                  <img
                    src={carro.img}
                    alt="Producto"
                    className="w-full h-full rounded-md" 
                  />
                </div>
                <div className='w-full h-[120px]'>
                  <div className='flex h-3/4'>
                    <div className='flex items-center justify-between w-5/6'>
                      <h1 className='font-semibold'>{carro.nombre}</h1>
                      <h2 className='text-xl'>Cantidad: {carro.cantidad}</h2> 
                    </div>

                    <div className=' flex items-center justify-center w-1/6'>
                      <h2 className='font-semibold text-xl text-[#388da8]'>${carro.precio}</h2>                  
                    </div>                                                                                
                  </div>                  

                  <div className='flex justify-end px-4'>
                    <button
                      onClick={() => eliminarDelCarrito(carro.id)}
                      className='text-red-500 hover:text-red-700 font-semibold'
                    >
                      Eliminar
                    </button>
                  </div>
                </div>                
              </div>              
            )
          })}
        </div>
      </div>    
      :
      <div className='mt-20'>
        No hay productos en el carrito
      </div>
  )
}

export default Cart