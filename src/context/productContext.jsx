import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
}

const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    const getProducts = async (url) => {
        setState({
            ...state,
            isLoading: true
        })
        try {
            const res = await axios.get(url);
            const products = res.data;
            const featuredProducts = products.filter(product => product.featured === true)
            setState({
                isLoading: false,
                isError: false,
                featuredProducts,
                products
            })
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                isError: true
            })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, setState }}>
            {children}
        </AppContext.Provider>
    )
}


export const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider }