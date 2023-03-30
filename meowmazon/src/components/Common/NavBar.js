import './NavBar.css';
import GrayLogo from './Img/mm3.png';
import { BrowserRouter, Route, Link } from "react-router-dom";


function NavBar() {
    return <div className='navbar'>
        <img src={GrayLogo} alt='meowmazon logo'></img>
        <ul className="navlist">
            <li className="listitem">
            <Link to="/">Home</Link>
                </li>
            <li className="listitem">
            <Link to="/shop">Shop</Link>
                </li>
            <li className="listitem">
            <Link to="/contact">Contact</Link>
                </li>
        </ul>
    </div>
}
export default NavBar;