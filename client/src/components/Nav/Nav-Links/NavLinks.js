import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    return (
        <nav className="nav__bottom__container">
            <div className="bottom__container">
                <ul className="nav">

                    <li className="nav-link">
                        <NavLink to="/" end>Home</NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/shop">Shop</NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/category/men">Men</NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/category/women">Women</NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to="/category/kids">Kids</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default NavLinks;