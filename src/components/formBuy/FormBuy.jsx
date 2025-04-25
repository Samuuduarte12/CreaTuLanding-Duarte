// components/CompraModal.jsx
import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAppContext } from '../../context/context';
import { IoIosClose } from "react-icons/io";

function FormBuy({setModalOpen, calcularTotalCarrito, calcularTotalPorProducto}) {
    const { carrito, setCarrito} = useAppContext()
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [compraId, setCompraId] = useState(null);
    const [loading, setLoading] = useState(false);
    const total = calcularTotalCarrito()

    useEffect(()=>{        
        console.log(carrito);
            
        
    },[])
    
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

        const ordenesCollection = collection(db, "ordenes");            
                
        const nuevaOrden = {
            nombre,
            telefono,
            productos: carrito,
            total,
            fecha: new Date().toISOString(),
        }
        
        addDoc(ordenesCollection, nuevaOrden).then(response =>{
            setLoading(false)
            setCompraId(response.id);
        })
        .catch(error => console.log("Error al guardar en Firebase", error));                        
    };
    
    const cerrarComprobante = ()=>{
        setCarrito([])
        setModalOpen(false)
    }

  return (
    <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-xs flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[90%] md:w-[550px] shadow-md border border-gray-50">        
        {compraId ? (
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
                <h3 className="text-lg font-semibold mb-2">Resumen de productos:</h3>
                <div className='flex justify-center items-center'>
                    <table className='border border-gray-400'>
                        <thead className='border border-gray-400'>
                            <tr>
                                <th className='p-1 px-3 border border-gray-400'>Producto</th>
                                <th className='p-1 px-3 border border-gray-400'>Cantidad</th>
                                <th className='p-1 px-3 border border-gray-400'>Precio por unidad</th>
                                <th className='p-1 px-3 border border-gray-400'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((carro)=> {
                                return (
                                    <tr key={carro.id}>                                    
                                        <td className="text-center border border-gray-400 py-1 px-3">{carro.nombre}</td>
                                        <td className="text-sm border border-gray-400 text-center p-1 px-3 text-gray-600">{carro.cantidad}</td>
                                        <td className="text-sm border border-gray-400 text-center p-1 px-3 text-gray-600">${carro.precio.toLocaleString('es-CL')}</td>
                                        <td className="font-medium border border-gray-400 text-center p-1 px-3">${calcularTotalPorProducto(carro)}</td>
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
        ) : (
            <div className='flex flex-col'>                
                <button 
                    onClick={()=> setModalOpen(false)} 
                    className="text-gray-500 float-right font-bold flex justify-end"
                >
                    <IoIosClose className='text-3xl'/>
                </button>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h2 className="text-xl text-center font-semibold mb-4">Completa tus datos</h2>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id='nombre'
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        type="tel"
                        id='telefono'
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <button type="submit" className="bg-gray-700 text-white p-3 rounded-md hover:bg-[#2f728b] transition">
                        {loading ? 
                            <div>
                                <span className="loader2"></span>
                            </div> 
                        : 
                            'Confirmar compra'
                        }
                        
                    </button>
                </form>
            </div>
        )}
      </div>
    </div>
  );
}

export default FormBuy;