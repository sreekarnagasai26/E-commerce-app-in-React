import ProductGrid from '../Components/ProductGrid/ProductGrid'
import StickyCart from '../Components/StickyCart/StickyCart'

const Home = () => {

    const products = [
          { id: 1, name: 'Smartphone X', price: 699.99, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Laptop Y', price: 1299.99, image: 'https://via.placeholder.com/150' },
           { id: 3, name: 'Headphones Z', price: 199.99, image: 'https://via.placeholder.com/150' },
        ];

    return (
        <div>
        <ProductGrid products={products}></ProductGrid>
       </div>
   
    )
}

export default Home