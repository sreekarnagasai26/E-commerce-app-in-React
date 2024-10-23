import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>shop</li>
                <li><Link to="/Cart">Cart</Link></li> {/* State-driven counter */}
                <li>Profile</li>
            </ul>
        </nav>
    )

}

export default Navbar;