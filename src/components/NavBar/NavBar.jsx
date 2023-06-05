import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <nav>
                <h1>SanixSwatch</h1>
                <ul>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Smartwatch</li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar