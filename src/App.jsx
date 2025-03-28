import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navBar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Page404 from './components/404/Page404.jsx';

function App() {
  return (    
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
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>              
  )
}

export default App;