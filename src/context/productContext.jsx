import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();
const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    filteredProducts: [],
    companies: [],
    categories: []
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
            // console.log(products)
            const featuredProducts = products.filter(product => product.featured === true)

            let companies = products.map(product => product.company)
            companies = companies.filter((self, index) => companies.indexOf(self) === index)
            companies.unshift('all')

            let categories = products.map(product => product.category)
            categories = categories.filter((self, index) => categories.indexOf(self) === index)
            categories.unshift('all')


            let colors = []
            for (let product of products) {
                colors.push(...product.colors)
            }
            colors.unshift('all')
            colors = colors.filter((self, index) => colors.indexOf(self) === index)
            setState({
                ...state,
                isLoading: false,
                isError: false,
                featuredProducts,
                products,
                filteredProducts: products,
                companies,
                categories,
                colors,
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
        <AppContext.Provider value={{ ...state, state, setState }}>
            {children}
        </AppContext.Provider>
    )
}


export const useProductContext = () => {
    return useContext(AppContext);
}
export { AppProvider }