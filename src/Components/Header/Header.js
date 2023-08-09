import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
          <div className="header">
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li> <Link to="/">Shop</Link> </li>
                    <li> <Link to="/order-review">Order Review</Link> </li>
                    <li> <Link to="/manage-inventory">Manage Inventory</Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;