import React from 'react'
import { Cards } from './CardSection/Cards'
import "./main.css"
import { SectionA } from './Sections/SectionA'

export const Main = () => {
    return (
        <main className="container-fluid main__container ">
            <Cards />
            <SectionA />
        </main>
    )
}
