import React from 'react'
import { useAppContext } from '../../context/context';
import { IoIosClose } from "react-icons/io";

function Comprobante({cerrarComprobante, total}) {
    const { carrito, compraId, calcularTotalPorProducto} = useAppContext()

  return (
    <div className="text-center">
        <button 
            onClick={cerrarComprobante} 
            className="text-gray-500 float-right font-bold flex justify-end"
        >
            <IoIosClose className='text-3xl'/>
        </button>
        <p className="text-green-600 font-bold">¡Compra realizada con éxito!</p>
        <p>ID de compra: <span className="font-mono">{compraId}</span></p>
        <div className="text-left">
            <h3 className="md:text-lg font-semibold mb-2">Resumen de productos:</h3>
            <div className='flex justify-center items-center'>
                <table className='border border-gray-400'>
                    <thead className='border border-gray-400'>
                        <tr>
                            <th className='text-xs md:text-base p-1 md:px-3 border border-gray-400'>Producto</th>
                            <th className='text-xs md:text-base p-1 md:px-3 border border-gray-400'>Cantidad</th>
                            <th className='text-xs md:text-base p-1 md:px-3 border border-gray-400'>Precio por unidad</th>
                            <th className='text-xs md:text-base p-1 md:px-3 border border-gray-400'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((carro)=> {
                            return (
                                <tr key={carro.id}>                                    
                                    <td className="text-xs md:text-base text-center border border-gray-400 py-1 px-3">{carro.nombre}</td>
                                    <td className="text-xs md:text-sm border border-gray-400 text-center p-1 px-3 text-gray-600">{carro.cantidad}</td>
                                    <td className="text-xs md:text-sm border border-gray-400 text-center p-1 px-3 text-gray-600">${carro.precio.toLocaleString('es-CL')}</td>
                                    <td className="text-xs md:text-base font-medium border border-gray-400 text-center p-1 px-3">${calcularTotalPorProducto(carro)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>        
            </div>
            <div className='p-4 flex justify-end'>
                <div className='w-1/2 border-t flex justify-between'>
                    <p>Total:</p>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Comprobante