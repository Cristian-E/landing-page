import React from 'react'
import './card.css'


export const Card = ({ title, p, a, logo }) => {


    return (
        <div className="card card-container">
            <div className="card-body d-flex ">
                <i className={`p-1 fs-3 fa-solid pt-2 px-3 fs-4 ${logo} `}></i>
                <div>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text card-secundary m-0"> {p} </p>
                    <a className="card-link" href="#">{a}</a>

                </div>
            </div>
        </div>
    )
}


