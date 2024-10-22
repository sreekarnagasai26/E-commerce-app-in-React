import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductGrid from './Components/ProductGrid/ProductGrid';

function App() {
  const products = [
    { id: 1, name: 'Smartphone X', price: 699.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Laptop Y', price: 1299.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones Z', price: 199.99, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="E-commerce">
     <Navbar> </Navbar>
     <ProductGrid products={products}></ProductGrid>
    </div>
  );
}

export default App;
