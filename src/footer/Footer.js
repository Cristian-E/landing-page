import React from 'react'
import './footer.css'


export const Footer = () => {


    return (
        <footer className=" text-light mt-5">
            <div className="container-fluid">
                <div className="row footer__container">
                    <div className="col-lg-4">
                        <h5>Contacto</h5>
                        <p>Dirección: Av. Siempre viva</p>
                        <p>Email: CristianRodriguez322@gmail.com</p>
                        <p>Teléfono: (3844) 322-4030</p>
                    </div>
                    <div className="col-lg-3">
                        <h5>Enlaces útiles</h5>
                        <ul className="list-unstyled footer__links">
                            <li><a href="#">Celulares</a></li>
                            <li><a href="#">Accesorios</a></li>
                            <li><a href="#">Sonido</a></li>
                            <li><a href="#">Smarthome</a></li>
                            <li><a href="#">Computacion</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled d-flex footer__redes">
                            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-4" />
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p><i class="fa-solid fa-copyright"></i> 2023 NEO TECH. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
