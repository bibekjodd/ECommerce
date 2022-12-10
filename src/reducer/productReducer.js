

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_API_DATA":
            const featuredProducts = action.payload.filter(currElem => currElem.featured === true)
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                featuredProducts
            }
        default:
            return state
    }
    return state;
}

export default reducer