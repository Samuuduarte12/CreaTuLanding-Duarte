import React from 'react';
import { useParams } from 'react-router';
import { useAppContext} from '../../context/context';
import Spinner from '../spinner/Spinner';
import Item from '../item/Item';

function ItemListContainer({greeTings, greeTings2}) {
  const {categoria} = useParams();  
  const {productos, loading} = useAppContext();    
    
  return (
    loading ? 
      <div className='md:mt-10 bg-white min-h-screen flex justify-center items-center'>
        <Spinner />
      </div>
    :
    <div className='bg-white min-h-screen text-center md:mt-10 md:p-5 relative'>
      <div className='py-20 font-bold'>
        <h1 className='text-2xl md:text-5xl pt-4 pb-2 text-gray-700'>
          {greeTings}
          <span className='text-[#388da8]'>TrendyLooks</span>
        </h1>        
        <p className='text-sx px-5 md:px-0 md:text-xl text-gray-500'>{greeTings2}</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-5 md:px-20 justify-center items-center relative'>
        {categoria ? 
          productos.filter(e => e.categoria === categoria).map(producto => {
            return (
              <Item
                key={producto.id}
                producto={producto}                       
              />
            )
          })
        :
          productos.map(producto => {
            return (
              <Item
                key={producto.id}
                producto={producto}                   
              />
            )
          })
        }
      </div>      
    </div>
  )
}

export default ItemListContainer;
