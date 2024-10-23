import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage'
import Cart from './Pages/ProductPage'
import { CartProvider } from './CartContext';


function App() {

  return (
    <CartProvider>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
