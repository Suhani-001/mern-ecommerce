import React from 'react';
import { Link } from 'react-router-dom';
import './NavBrand.css';

const NavBrand = () => {
    return (
        <div className="navbrand__container">
            <h1 className="navbrand">
                <Link to="/">vastra</Link>
            </h1>
        </div>
    );
};

export default NavBrand;