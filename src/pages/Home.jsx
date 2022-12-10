import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

function Home() {
    return (
        <>
            <HeroSection data='Jodd ECommerce' />
            <FeaturedProducts />
            <Services />
            <Trusted />
        </>
    )
}

export default Home