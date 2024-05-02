import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    const filteredProducts = useMemo(() => products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [products, searchTerm]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products.');
            });
    }, []);

    return (
        <div>
            <h2>All Products:</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {error ? <p>{error}</p> : (
                <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <li key={product._id}>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </li>
                        ))
                    ) : (
                        <p>No products found</p>
                    )}
                </ul>
            )}
        </div>
    );
}

export default ProductList;
