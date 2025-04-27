// components/CompraModal.jsx
import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useAppContext } from '../../context/context';
import Comprobante from '../comprobante/Comprobante';
import { IoIosClose } from 'react-icons/io';


function FormBuy({setModalOpen}) {
    const { carrito, setCarrito, compraId, setCompraId, calcularTotalCarrito} = useAppContext()
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');    
    const [loading, setLoading] = useState(false);
    const total = calcularTotalCarrito()
        
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
        
        carrito.forEach(async (carro) => {
            try {              
              const q = query(collection(db, "productos"), where("id", "==", carro.id));
              const querySnapshot = await getDocs(q);

              querySnapshot.forEach(async (docSnap) =>{
                const data = docSnap.data();
                const nuevoStock = data.stock - carro.cantidad;
                const productoRef = doc(db, "productos", docSnap.id);
          
                await updateDoc(productoRef, { stock: nuevoStock });
              });
            } catch (error) {
              console.log("Error al actualizar el stock:", error);
            }
        });        
    };
    
    const cerrarComprobante = ()=>{
        setCarrito([])
        setModalOpen(false)
        setCompraId("")
    }

  return (
    <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-xs flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[90%] md:w-[550px] shadow-md border border-gray-50">        
        {compraId ? (
            <Comprobante cerrarComprobante={cerrarComprobante} total={total}/>
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