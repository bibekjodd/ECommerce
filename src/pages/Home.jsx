import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

function Home() {
    return (
        <>
            <HeroSection data='Jodd ECommerce' />
            <Services />
            <Trusted />
        </>
    )
}

export default Home