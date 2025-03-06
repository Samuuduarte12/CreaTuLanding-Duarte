import React from 'react';

function ItemListContainer({greeTings, greeTings2}) {
  return (
    <div className='bg-gray-100 min-h-screen text-center mt-10 p-5 font-bold'>
      <h1 className='text-4xl pt-4 pb-2 text-gray-700'>
        {greeTings}
        <span className='text-[#388da8]'>TrendyLooks</span>
      </h1>
      <p className='text-lg text-gray-500'>{greeTings2}</p>
    </div>
  )
}

export default ItemListContainer;