import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react"
import { db } from "../firebaseConfig";

export const AppContext = createContext(); 

export const useAppContext = () =>  useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito , setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState(null);  
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
    
        if(!productos){
          getDocs(productosCollection)
          .then(snapshot => {
            let arrayDeProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayDeProductos)
            setTimeout(() => {
              setLoading(false);
            }, 500);
            console.log("trajo productos:")
          })
          .catch(error => console.log(error));
        }
      },[]);
    
      const mensajeNotification = (msg) => {
        setNotif({ show: true, message: msg });
        setTimeout(() => {
          setNotif({ show: false, message: '' });
        }, 2000);
      };
              
    return(
        <AppContext.Provider value={{agregarAlCarrito, carrito, setCarrito, productos, loading, mensajeNotification, notif, setNotif}}>
            {props.children}
        </AppContext.Provider>
    )
}