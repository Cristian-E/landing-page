import React, { useState } from 'react'
import "./Header.css"




export const Header = () => {

    const [clicked, setClick] = useState(false)

    const hanledChange = () => {
        setClick(!clicked)
    }


    console.log(clicked);

    return (
        <header>
            <div className="navbar__container">
                <button className="menu__hamburguesa" onClick={hanledChange}>
                    <i className="fa-solid fa-bars menu" ></i>
                </button>
                <h3 > NEO SHOP </h3>

                <ul className={` links ${clicked ? "activado" : ""}`} >
                    <li><a href="#">Celulares</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Sonido</a></li>
                    <li><a href="#">Smarthome</a></li>
                    <li><a href="#">Computacion</a></li>
                </ul>

                <div className="icono">
                    <i className="fa-solid fa-magnifying-glass"></i>

                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </header>
    )
}
