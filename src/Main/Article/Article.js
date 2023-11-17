import React from 'react'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img4.jpg'

import "./article.css"

export const Article = () => {
    return (
        <div className="container mt-4">


            <div className="row mt-4  pt-5 section-b d-flex justify-content-center mb-5 "  >
                <div className="col-lg-8 article-a">
                    <h2>Descubre un Universo de Tecnología</h2>
                    <p className="fs-4 pt-3 ">En nuestra tienda, no solo nos apasiona ofrecer accesorios para tu teléfono, sino que también exploramos un universo completo de tecnología para satisfacer todas tus necesidades. Desde audífonos que te sumergen en un sonido excepcional hasta smartphones de última generación y periféricos innovadores, hemos seleccionado cuidadosamente productos que elevan tu experiencia tecnológica.</p>
                </div>
                <div className="col-lg-4">
                    <img src={img1} style={{ width: "300px", height: "auto", borderRadius: "30px" }} alt="Imagen de Accesorios para Celulares" class="img-fluid" />
                </div>
            </div>


            <div className="row">
                <div className="col-lg-8 article-a">
                    <h2>Periféricos Innovadores:</h2>
                    <p className=" fs-5">En nuestra tienda, creemos que la tecnología debe ser accesible y emocionante. Por eso, cada producto en nuestro catálogo ha sido seleccionado para ofrecer calidad, innovación y estilo. </p>
                    <img src={img2} alt="Imagen de artículo" class="img-fluid mb-4" style={{ borderRadius: "40px" }} />

                    <p className=" fs-5">Optimiza tu espacio de trabajo y mejora tu productividad con nuestros periféricos innovadores. Teclados ergonómicos, ratones de alta precisión y otros accesorios que transformarán tu experiencia informática.</p>

                    <p className=" fs-5">Explora nuestra colección y descubre cómo puedes llevar tus dispositivos y accesorios al siguiente nivel. ¡Bienvenido al universo de la tecnología de vanguardia!.</p>
                </div>
            </div>

        </div>
    )
}
