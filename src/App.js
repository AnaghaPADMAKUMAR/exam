import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Login></Login>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product-view/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
