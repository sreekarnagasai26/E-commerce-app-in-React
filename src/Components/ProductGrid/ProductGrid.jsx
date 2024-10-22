import ProductCard from "../Navbar/ProductCard/ProductCard";

const ProductGrid = ({products}) => (
    <div className="product-grid">
        {products.map((product) => (<ProductCard key={product.id} product={product}></ProductCard>))}
    </div>
)

export default ProductGrid