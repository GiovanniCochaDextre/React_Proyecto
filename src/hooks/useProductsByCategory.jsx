import React from 'react'
import { getProductsByCategory } from '../services/products.service';

export const useProductsByCategory = (id) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=> {
        getProductsByCategory(id)
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return { products };
};
