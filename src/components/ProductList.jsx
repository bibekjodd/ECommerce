import React from 'react'
import { useProductContext } from '../context/productContext'
import Product from '../components/Product'
function ProductList({ gridView }) {
    const { filteredProducts } = useProductContext();

    return (
        <div className={`${gridView ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map(product => (
                <Product
                    gridView={gridView}
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    description={product.description}
                />
            ))}
        </div>
    )
}

export default ProductList