import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../context-provider/AppContext';

export function Navbar() {
    const { user } = useContext(AppContext)
    return (
        <nav className="navbar">
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/cart">{user.name} Cart{user.cart.length}</Link>
            </div>

        </nav>
    );
}
