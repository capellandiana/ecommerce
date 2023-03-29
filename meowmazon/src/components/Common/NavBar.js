import './NavBar.css';
import GrayLogo from './Img/mm3.png'


function NavBar() {
    return <div className='navbar'>
        <img src={GrayLogo} alt='meowmazon logo'></img>
        <ul className="navlist">
            <li className="listitem">
                <a href="App.js">Home</a>
                </li>
            <li className="listitem">
                <a href="shop.html">Shopping</a>
                </li>
            <li className="listitem">
                <a href="Contact.js">Contact Us</a>
                </li>
        </ul>
    </div>
}
export default NavBar;