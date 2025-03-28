import { productos } from "./productos";

export const fetchData = ()=> new Promise((resolve, reject)=>{    
    resolve(productos)
})