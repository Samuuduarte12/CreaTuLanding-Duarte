import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchData } from '../../fechData';
import Spinner from '../spinner/Spinner';
import Item from '../item/Item';
import { db } from '../../firebaseConfig';
import { addDoc, collection, getDocs } from 'firebase/firestore';

function ItemListContainer({greeTings, greeTings2}) {
  const {categoria} = useParams();

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState(null);  
  
  const productosCollection = collection(db, "productos");
  const ordenesCollection = collection(db, "ordenes");
    
  const crearOrden =()=>{
    const nuevaOrden = {
      nombre: "samu",
      telefono: 134,      
    }

    /* cargar datos a firebase */
    addDoc(ordenesCollection, nuevaOrden).then(response =>{
      console.log("Creaste la orden", response.id);
    })
  }

   
  useEffect(()=>{
    /* Traer datos de firebase */
    getDocs(productosCollection).then(snapshot => {
      let arrayDeProductos = snapshot.docs.map(el => el.data());
    })

    
    

    if(!productos){
      fetchData()
        .then(response =>{
          setProductos(response);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch(error =>console.log(error));
    }
  },[categoria]);
  

  return (
    loading ? <Spinner />
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
