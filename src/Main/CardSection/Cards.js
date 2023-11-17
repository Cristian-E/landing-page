import React from 'react'
import { Card } from './Card'


const card = [
    {
        id: 1,
        title: 'Reintegro',
        logo: "fa-brands fa-paypal",
        p: 'Hasta $10.000 en tu compra',
        a: 'Conocer más'
    },
    {
        id: 2,
        title: 'Cuotas en factura',
        logo: "fa-solid fa-file-invoice",
        p: 'Para productos de hasta $50.000',
        a: 'Conocer más'
    },
    {
        id: 3,
        title: 'Cuotas sin interes',
        logo: "fa-solid fa-credit-card pt-2 px-3 fs-4 ",
        p: 'En productos seleccionados',
        a: 'Conocer más'
    }
]


export const Cards = () => {
    return (
        <div className=" d-flex justify-content-center ">
            <div className="row" style={{ width: '100%' }}>
                {
                    card.map(card => (
                        <div className="col-md-4 mb-3 " key={card.id} >
                            <Card title={card.title} p={card.p}
                                logo={card.logo} a={card.a}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
