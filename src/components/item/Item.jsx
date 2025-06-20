import React from 'react';
import { useAppContext } from '../../context/context';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

function Item({ producto}) {
  const {id, img, nombre, precio, stock } = producto;
  const {agregarAlCarrito} = useAppContext()  

  const handleAgregar = () => {        
    if(stock > 0 ){
      agregarAlCarrito(producto, 1);      
      toast("Producto agregado al carrito");    
    }else{      
      toast('Producto sin stock');
    }    
  };

  return (
    <div className="w-[150px] md:w-[250px] relative md:m-[30px_auto] rounded-2xl shadow-xl">      
      <Link to={`/detalle/${id}`}>
        <div className="flex items-center justify-center h-[200px] md:h-[300px] bg-gray-200 rounded-t-2xl overflow-hidden relative">
          <img
            src={img}
            alt="Producto"
            className="w-full h-full rounded-t-2xl transition-transform duration-300 transform hover:scale-110" 
          />
        </div>
      </Link>

      <div className="absolute top-4 uppercase text-[10px] md:text-[13px] font-semibold bg-[#388da8] text-white md:py-[3px] px-1  md:px-2.5  rounded-r-2xl">
        {stock > 0 ? "En Stock" : "Sin Stock"}
      </div>

      <div className="md:p-2.5 pt-0 bg-white rounded-b-2xl">        
        <Link to={`/detalle/${id}`}>
          <h4 style={{fontFamily:'Righteous'}} className="text-[#363636] hover:text-[#388da8] text-xs font-bold md:text-xl p-1 md:p-2">          
            {nombre}          
          </h4>        
        </Link>
                  
        <div className="overflow-hidden border-t border-[#eee] md:py-[8px]">
          <h2 className="text-sm md:text-[18px] font-semibold text-[#388da8]">${precio.toLocaleString('es-CL')}</h2>
        </div>

        <div className='flex flex-col md:flex-row justify-center font-semibold gap-2 pb-2 py-1 px-2 md:p-0'>
        <button
            onClick={handleAgregar}            
            className="text-[10px] md:w-full md:text-xs text-white bg-gray-700 hover:bg-[#388da8] bggre md:px-2 inline-block md:py-1 rounded-md transition duration-300 cursor-pointer"
          >            
            Agregar al carrito
          </button>         
        </div>
      </div>      
    </div>
  );
}

export default Item;