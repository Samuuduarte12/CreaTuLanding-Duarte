import { createContext, useContext, useState } from "react"

export const AppContext = createContext(); 

export const useAppContext = () =>  useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito , setCarrito] = useState([]);
    
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

    return(
        <AppContext.Provider value={{agregarAlCarrito, carrito, setCarrito}}>
            {props.children}
        </AppContext.Provider>
    )
}