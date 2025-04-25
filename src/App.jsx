import './App.css';
import { ContextProvider } from './context/context.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/cart/Cart.jsx';
import Page404 from './components/404/Page404.jsx';

function App() {            
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={
              <ItemListContainer
                greeTings="Bienvenido a "
                greeTings2="Explora nuestros productos y encuentra lo que más te gusta."                
              />
            }
          />
          <Route path='/categoria/:categoria' element={
              <ItemListContainer
                greeTings="Bienvenido a "
                greeTings2="Explora nuestros productos y encuentra lo que más te gusta."                
              />
            }
          />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>              
    </ContextProvider>
  )
}

export default App;