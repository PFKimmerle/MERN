import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct order of imports
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { ProductManager } from './components/ProductManager';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductManager />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
