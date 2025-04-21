import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAppContext } from '../../context/context';
import { IoArrowBackSharp } from "react-icons/io5";
import Spinner from '../spinner/Spinner';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetialImg from '../ItemDetailContainer/ItemDetialImg';
import Notification from '../notification/Notification';

function ItemDetailContainer() {
  const {id} = useParams();  
  const {agregarAlCarrito, productos, notif, mensajeNotification} = useAppContext();
  const [loading, setLoading] = useState(true);
  const [loadingNotify, setLoadingNotify] = useState(false);
  const [mostrarCount, setMostrarCount] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  useEffect(()=>{
    if (productos && productos.length > 0) {
      const productoAMostrar = productos.find(e => e.id === parseInt(id));      
      setProducto(productoAMostrar);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  }, [productos, id]);

  const ocultarCount = (producto, contador) =>{
    setMostrarCount(false);
    setLoadingNotify(true);
    setTimeout(() => {      
      agregarAlCarrito(producto, contador);
      setLoadingNotify(false);
      mensajeNotification('Producto agregado al carrito');
    }, 800);
  }  
  
  return (
    loading ? 
      <Spinner/>
    :   
    <div className='mt-20 md:pt-14 md:mt-8 px-4'>
      <button onClick={()=> window.history.back()} className='text-2xl cursor-pointer'>
        <IoArrowBackSharp/>
      </button>
      {producto ?
        <div className="md:pt-5 bg-whie flex flex-col md:flex-row px-5 md:px-20">
          {/* Solo se ve en mobile */}
          <div className='md:hidden text-center'>
            <h1 style={{fontFamily:"Righteous"}} className='text-2xl md:text-5xl py-3 md:py-5 font-bold'>
              {producto.nombre}
            </h1>
          </div>
                
          <div className='md:w-1/2 md:h-[550px] flex justify-center'>
            <ItemDetialImg img={producto.img}/>
          </div>

          <div className='md:w-1/2 flex flex-col justify-between md:h-[500px]'>
            <div className='text-center md:text-start'>
              <h1 style={{fontFamily:"Righteous"}} className='text-2xl md:text-5xl py-5 font-bold hidden md:block'>
                {producto.nombre}
              </h1>
              <p className='text-gray-400'>Categoria: {producto.categoria}</p>
              <h2 className='text-3xl py-3 md:py-5 font-medium text-[#388da8]'>${producto.precio.toLocaleString('es-CL')}</h2>
            </div>            
            <h3 className='text-lg md:text-xl text-start py-2 border-b border-gray-300 font-medium'>
              Descripcion
            </h3>

            <p className='text-sm md:text-base font-normal md:pb-10 md:py-8 '>{producto.descripcion}</p>
            <div className='flex flex-col items-start gap-5 py-5 md:px-2 border-t border-gray-200'>
              {mostrarCount &&
                <div className='flex gap-2 md:gap-10 items-center'>
                  <ItemCount
                    stock={producto.stock}
                    contador={contador}
                    setContador={setContador}
                  />
                  <p className='text-[#388da8] font-medium'>Quedan {producto.stock} disponibles</p>
                </div>              
              }
              <div className='w-full'>
                <button         
                  onClick={()=> ocultarCount(producto, contador)}
                  disabled={loadingNotify}
                  className={`text-white font-semibold w-full py-2 px-2 rounded-md transition duration-300 cursor-pointer 
                    ${loadingNotify ? 'bg-gray-400': 'bg-gray-700 hover:bg-[#388da8]'}`
                  }
                >
                  {loadingNotify ? 'Agregando...' : 'Agregar al carrito'}
                </button>
              </div>
            </div>
          </div>
        </div>
      :
        <p className='flex justify-center items-center text-2xl font-semibold h-screen'>
          Producto con el id {id} no se a encontrado
        </p>
      }
      <Notification message={notif.message} show={notif.show}/>
    </div>    
  )
}

export default ItemDetailContainer;