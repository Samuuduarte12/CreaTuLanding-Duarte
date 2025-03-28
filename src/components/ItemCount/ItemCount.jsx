import React from 'react'

function ItemCount({stock, contador, setContador}) {  
  
  function modificarContador(operacion){
    if(operacion === "+"){
      if(contador < stock){
        setContador(contador + 1);
      }
    }else{
      if(contador > 1){
        setContador(contador - 1);
      }
    }
  }
    
  return (            
    <div className='flex border border-gray-300'>
      <button 
        onClick={()=> modificarContador("-")}
        className='px-3 md:px-5 border-r border-gray-300'
      >
        -
      </button>

      <p className='py-2 px-4 md:px-6'>{contador}</p>

      <button 
        onClick={()=> modificarContador("+")} 
        className='px-3 md:px-5 border-l border-gray-300'
      >
        +
      </button>
    </div>                    
  )
}

export default ItemCount;