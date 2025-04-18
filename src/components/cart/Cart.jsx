import React from 'react'
import { useAppContext } from '../../context/context'

function Cart() {
  const { carrito, setCarrito } = useAppContext()

  function eliminarDelCarrito(id) {
    const newCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(newCarrito);
  }

  function calcularTotalCarrito() {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  function calcularSubTotal(carro) {
    let subTotal = 0;
    subTotal += carro.cantidad * carro.precio;
    return subTotal.toLocaleString('es-CL');
  }

  function modificarCantidad(id, operacion) {
    const newCarrito = carrito.map(producto => {
      if (producto.id === id) {
        let nuevaCantidad = operacion === 'sumar' ? producto.cantidad + 1 : producto.cantidad - 1;
        if (nuevaCantidad < 1) nuevaCantidad = 1;
        return { ...producto, cantidad: nuevaCantidad };
      }
      return producto;
    });
    setCarrito(newCarrito);
  }

  return (
    carrito.length > 0 ?
      <div className='mt-20 bg-white'>
        <h1 className='text-sx text-center px-5 md:px-0 md:text-xl text-gray-700 font-bold m-5'>Productos del carrito</h1>

        <div className='flex flex-col-reverse md:flex-row-reverse items-center md:px-10'>

          {/* Resumen */}
          <div className='w-full bottom-0 md:w-2/6 fixed md:top-24 md:right-10 md:h-fit md:z-50 bg-white shadow-2xl rounded-xl md:mt-10'>
            <h1 className='text-lg p-4 border-b border-gray-300'>Resumen de compra</h1>
            <div className='flex justify-between items-center p-4'>
              <h3>Productos ({carrito.length})</h3>
              <p>${calcularTotalCarrito().toLocaleString('es-CL')}</p>
            </div>
            <div className='text-xl font-semibold text-center mt-5 flex gap-2 p-4 text-[#388da8]'>
              <h2>Total: </h2>
              <p>${calcularTotalCarrito().toLocaleString('es-CL')}</p>
            </div>
            <div className='p-5'>
              <button className='w-full text-white bg-gray-700 hover:bg-[#388da8] inline-block py-3 rounded-md transition duration-300'>
                Realizar Compra
              </button>
            </div>
          </div>

          {/* Productos */}
          <div className='w-full md:w-3/4 md:mr-[34%] mb-52 md:mb-10'>
            <div className='flex flex-col items-center justify-center p-1 gap-3'>
              {carrito.map((carro) => (
                <div key={carro.id} className='flex items-center gap-2 bg-white shadow-xl p-2 w-full md:w-3/4 rounded-2xl'>

                  {/* Imagen */}
                  <div className="flex-shrink-0 h-[100px] w-[100px] md:h-[120px] md:w-[120px]">
                    <img
                      src={carro.img}
                      alt="Producto"
                      className="w-full h-full rounded-md object-cover"
                    />
                  </div>

                  {/* Contenido */}
                  <div className='flex flex-col w-[calc(100%-120px)]'>

                    {/* Nombre, Cantidad, Subtotal */}
                    <div className='flex flex-col md:flex-row md:items-center justify-between md:h-[90px] w-full gap-2'>
                      <h1 className='text-sm md:text-lg font-semibold'>
                        {carro.nombre}
                      </h1>

                      <div className='flex items-center gap-1 md:gap-3'>
                        <h2 className='text-xs md:text-base'>Cantidad:</h2>
                        <div className='flex items-center border border-gray-300 rounded'>
                          <button
                            onClick={() => modificarCantidad(carro.id, 'restar')}
                            className='px-2 border-r border-gray-300'
                          >
                            -
                          </button>
                          <span className='px-2'>{carro.cantidad}</span>
                          <button
                            onClick={() => modificarCantidad(carro.id, 'sumar')}
                            className='px-2 border-l border-gray-300'
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className='text-xs md:text-xl font-bold text-[#388da8]'>
                        ${calcularSubTotal(carro)}
                      </div>

                    </div>

                    {/* Eliminar */}
                    <div className='flex justify-end mt-1'>
                      <button
                        onClick={() => eliminarDelCarrito(carro.id)}
                        className='text-red-500 hover:text-red-700 font-semibold text-sm md:text-base'
                      >
                        Eliminar
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      :
      <div className='mt-20 text-center text-gray-500 text-lg'>
        No hay productos en el carrito
      </div>
  )
}

export default Cart
