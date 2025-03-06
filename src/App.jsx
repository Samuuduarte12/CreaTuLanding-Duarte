import './App.css';
import ItemListContainer from './components/itemContainer/ItemListContainer.jsx';
import Navbar from './components/navBar/NavBar.jsx';

function App() {    
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeTings="Bienvenido a " greeTings2="Explora nuestros productos y encuentra lo que más te gusta."/>      
    </div>
  )
}

export default App;