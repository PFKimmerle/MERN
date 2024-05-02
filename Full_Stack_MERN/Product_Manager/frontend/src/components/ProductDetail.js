import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                setError('Failed to fetch product details.');
            });
    }, [id]);

    return (
        <div>
            {error ? <p>Error: {error}</p> : (
                <>
                    <h1>{product.title}</h1>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                </>
            )}
        </div>
    );
}

export default ProductDetail;
