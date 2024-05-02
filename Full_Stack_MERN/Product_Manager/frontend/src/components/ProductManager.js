import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ProductManager() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: '', price: '', description: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                const sortedProducts = response.data.sort((a, b) => a.title.localeCompare(b.title));  // Sort products in alphabetical order
                setProducts(sortedProducts);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/products/${id}`)
            .then(response => {
                console.log('Product deleted:', response.data);
                setProducts(products.filter(product => product._id !== id));
            })
            .catch(error => {
                console.error('Failed to delete product:', error.response.data);
            });
    };

    const handleCreate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/products', newProduct)
            .then(response => {
                console.log('Product created:', response.data);
                setProducts([...products, response.data]);
                setNewProduct({ title: '', price: '', description: '' });
            })
            .catch(error => {
                console.error('Failed to create product:', error.response.data);
            });
    };

    return (
        <div style={{ margin: 'auto', width: '50%', padding: '10px' }}>
            <h1>Product Manager Dashboard</h1>
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input style={{ padding: '10px', fontSize: '16px' }} type="text" id="title" name="title" placeholder="Title" required value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
                <input style={{ padding: '10px', fontSize: '16px' }} type="text" id="price" name="price" placeholder="Price" required value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                <textarea style={{ padding: '10px', fontSize: '16px', height: '100px' }} id="description" name="description" placeholder="Description" required value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
                <button style={{ padding: '10px', fontSize: '16px', backgroundColor: '#389C71', color: 'white', border: 'none' }} type="submit">Create</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <h2>All Products: Showing {products.length} of {products.length} items</h2>
                {products.map(product => (
                    <div key={product._id} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0', position: 'relative' }}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <p>Status: {product.status}</p> {/* Show product status */}
                        <button style={{ position: 'absolute', right: '10px', top: '40px', padding: '5px', fontSize: '12px', backgroundColor: '#DF4C34', color: 'white', border: 'none', width: '60px' }} onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}