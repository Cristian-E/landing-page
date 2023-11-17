import React from 'react'
import './SectionA.css'
import img1 from '../../img/img1.jpeg'
import { Article } from '../Article/Article'

export const SectionA = () => {
    return (
        <div className="container">
            <div className="container my-5 section-a " >
                <div clasclassNames="row">
                    <div className="col text-center section__title">
                        <h2>Descubre Nuestros Últimos Accesorios</h2>
                        <p>
                            Explora nuestro catálogo hoy mismo y descubre cómo puedes llevar tu experiencia móvil al siguiente nivel. ¡Bienvenido a la tienda donde la innovación y el estilo se encuentran para crear una experiencia única para tu teléfono!
                        </p>

                    </div>
                </div>
            </div>



            <Article />

        </div>



    )
}
