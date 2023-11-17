import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Header } from './header/Header';
import { Main } from './Main/Main';
import { HeroSection } from './Main/HeroSection/HeroSection'
import { Footer } from './footer/Footer';

export const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Main />
            <Footer />
        </>
    )
}
