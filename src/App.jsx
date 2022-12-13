import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'

function App() {

    const location = useLocation();
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [location])


    return (
        <div className='min-h-screen flex flex-col '>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products' element={<Products />} />
                <Route path='/singleproduct/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App