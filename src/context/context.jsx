import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react"
import { db } from "../firebaseConfig";

export const AppContext = createContext(); 

export const useAppContext = () =>  useContext(AppContext);

export const ContextProvider = (props) => {
  const [carrito , setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState(null);  
  const [compraId, setCompraId] = useState(null);
  const [notif, setNotif] = useState({ show: false, message: '' });
    
  function agregarAlCarrito (prod, cantidad) {
    const nuevoProducto = {
      ...prod,
      cantidad,
    }
        
    if(carrito.some(el => el.id === prod.id)){
            
      const newCarrito = carrito.map(element => {
        if(element.id === prod.id){
          return {
            ...element,
            cantidad: element.cantidad + cantidad
          }
        }else{
          return element;
        }
      })                                    
      setCarrito(newCarrito);     
    }else{
      setCarrito([...carrito, nuevoProducto]);
    }
  }

  useEffect(()=>{
    const productosCollection = collection(db, "productos");
    
    if(!productos || compraId){
      getDocs(productosCollection)
      .then(snapshot => {
        let arrayDeProductos = snapshot.docs.map(el => el.data());
        setProductos(arrayDeProductos);
        console.log("traje los productos");
         
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(error => console.log(error));
    }
  },[compraId]);
    
  const mensajeNotification = (msg) => {
    setNotif({ show: true, message: msg });
    setTimeout(() => {
      setNotif({ show: false, message: '' });
    }, 2000);
  };

  function calcularTotalCarrito() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    return total.toLocaleString('es-CL');
  }

  function calcularTotalPorProducto(carro) {
    let subTotal = 0;
    subTotal += carro.cantidad * carro.precio;
    return subTotal.toLocaleString('es-CL');
  }
              
  return(
    <AppContext.Provider value={{agregarAlCarrito, carrito, setCarrito, productos, loading, 
      mensajeNotification, notif, setNotif, compraId, setCompraId, calcularTotalCarrito, calcularTotalPorProducto}}>
      {props.children}
    </AppContext.Provider>
  )
}