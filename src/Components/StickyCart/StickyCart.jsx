import './StickyCart.css'

const StickyCart = ({itemCount}) => (
    <div className="sticky-cart">
        <p>Cart Items: {itemCount}</p>
        <button>View Cart</button>
    </div>
)

export default StickyCart