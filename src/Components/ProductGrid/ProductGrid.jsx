import ProductCard from "../Navbar/ProductCard/ProductCard";
import './ProductGrid.css'

const ProductGrid = ({products}) => {
    if (!Array.isArray(products)) {
        console.error('Expected products to be an array, but got:', products);
        return <p>No products available.</p>; // Fallback UI if products is not an array
      }

    return (
    <div className="product-grid">
        {products.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>))}
    </div>
)
}

export default ProductGrid